// Cloud saving for Alphabet Ladder (Supabase). The browser's local storage stays
// the primary copy: the game always works offline, and the cloud is a backup that
// follows the player between devices. Nothing here ever deletes progress except
// the explicit "Reset progress" action.
//
// The URL and key below are the project's PUBLIC (publishable) credentials. They
// are meant to be in the page; row-level security in supabase-setup.sql is what
// keeps each player's row private. Never put a secret / service-role key here.
const SUPABASE_URL = "https://rzibktidznhaldginsao.supabase.co";
const SUPABASE_KEY = "sb_publishable_zIgcpGAmlEApw-29CYia9A_W4bpuLEJ";
const PROGRESS_TABLE = "alphabet_ladder_progress";

const normKey = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");

function validSave(s) {
  return !!s && Number.isInteger(s.level) && s.level >= 1 && Array.isArray(s.history);
}

// Combines two saves (e.g. this device and the account) so that NEITHER loses
// anything: furthest level wins, every finished level is kept (a win beats a
// give-up), and a game in progress keeps every guess from both sides.
// mergeSaves(a, a) equals a, and a's ordering is preserved.
function mergeSaves(a, b) {
  a = validSave(a) ? a : { level: 1, current: null, history: [] };
  b = validSave(b) ? b : { level: 1, current: null, history: [] };

  const hist = new Map();
  for (const h of [...a.history, ...b.history]) {
    if (!h || !Number.isInteger(h.level)) continue;
    const old = hist.get(h.level);
    if (!old) hist.set(h.level, h);
    else if (h.won && !old.won) hist.set(h.level, h);
    else if (h.won === old.won && (h.finishedAt || 0) < (old.finishedAt || 0)) hist.set(h.level, h);
  }

  const level = Math.max(a.level, b.level);
  const here = [a.current, b.current].filter(c => c && c.level === level);
  const done = hist.get(level);
  let current = null;

  if (here.length === 1) {
    current = here[0];
  } else if (here.length === 2) {
    const finished = here.filter(c => c.over);
    if (finished.length) current = finished[0];
    else {
      const seen = new Set();
      const guesses = [];
      for (const g of [...(here[0].guesses || []), ...(here[1].guesses || [])]) {
        const k = normKey(g);
        if (!seen.has(k)) { seen.add(k); guesses.push(g); }
      }
      current = {
        level, guesses,
        revealed: Math.max(here[0].revealed | 0, here[1].revealed | 0),
        over: false
      };
    }
  }
  // A finished level with no saved board: rebuild the finished board from history
  // so the player can't be dropped into a fresh replay of a level they completed.
  if (!current && done) {
    current = { level, guesses: done.guesses || [], revealed: done.revealed | 0, over: true };
  }
  return { level, current, history: [...hist.values()] };
}

const Cloud = (() => {
  let client = null, user = null, started = false, timer = null, running = false, rerun = false;
  let hooks = { getSave: () => null, adopt: () => {}, status: () => {}, onUser: () => {} };

  const fresh = () => ({ level: 1, current: null, history: [] });
  const setStatus = (state, text) => hooks.status(state, text);

  async function fetchRemote() {
    const { data, error } = await client.from(PROGRESS_TABLE).select("data").eq("user_id", user.id).maybeSingle();
    if (error) throw error;
    return data && validSave(data.data) ? data.data : null;
  }

  async function writeRemote(save) {
    const { error } = await client.from(PROGRESS_TABLE)
      .upsert({ user_id: user.id, data: save, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
    if (error) throw error;
  }

  // Pull the account's save, merge it with this device's, keep both up to date.
  async function sync() {
    if (!client || !user) return;
    if (running) { rerun = true; return; }
    running = true;
    setStatus("saving", "Saving…");
    try {
      const remote = await fetchRemote();
      const merged = mergeSaves(hooks.getSave(), remote);
      hooks.adopt(merged);
      if (!remote || JSON.stringify(remote) !== JSON.stringify(merged)) await writeRemote(merged);
      setStatus("ok", "Saved to your account");
    } catch (e) {
      console.warn("Cloud sync failed; progress is still saved on this device.", e);
      setStatus("offline", "Not backed up yet — saved on this device");
    } finally {
      running = false;
      if (rerun) { rerun = false; schedule(); }
    }
  }

  function schedule() {
    if (!client || !user) return;
    clearTimeout(timer);
    timer = setTimeout(sync, 1200);
  }

  return {
    schedule,
    flush() { clearTimeout(timer); return sync(); },
    user: () => user,
    isAnonymous: () => !user || !!user.is_anonymous,
    email: () => (user && user.email) || null,

    async start(h) {
      hooks = Object.assign(hooks, h);
      try {
        if (typeof supabase === "undefined") throw new Error("Supabase library didn't load");
        client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
          // Own storage key so this game never clashes with other apps on the same
          // site that use the same Supabase project.
          auth: { persistSession: true, autoRefreshToken: true, storageKey: "alphabetLadder.auth" }
        });
        client.auth.onAuthStateChange((event, session) => {
          const next = session ? session.user : null;
          const changed = (next && next.id) !== (user && user.id);
          user = next;
          // Don't call back into supabase inside this handler; defer.
          setTimeout(() => {
            hooks.onUser(user);
            if (started && user && changed) sync();
          }, 0);
        });
        let { data: { session } } = await client.auth.getSession();
        if (!session) {
          const res = await client.auth.signInAnonymously();
          if (res.error) throw res.error;
          session = res.data.session;
        }
        user = session.user;
        hooks.onUser(user);
        await sync();
      } catch (e) {
        console.warn("Cloud saving unavailable; using this device only.", e);
        client = null;
        setStatus("offline", "Saved on this device only");
      } finally {
        started = true;
      }
    },

    // Replace the account's save outright (used only by "Reset progress").
    async overwrite(save) {
      clearTimeout(timer);
      if (!client || !user) return;
      try { await writeRemote(save || fresh()); setStatus("ok", "Saved to your account"); }
      catch (e) { setStatus("offline", "Reset on this device only — couldn't reach your account"); throw e; }
    },

    // Give an anonymous player an email so their progress survives switching
    // device / clearing the browser. They keep the same account and progress.
    async linkEmail(email) {
      if (!client) throw new Error("Cloud saving isn't available right now.");
      const { error } = await client.auth.updateUser({ email }, { emailRedirectTo: location.origin + location.pathname });
      if (error) throw error;
    },

    // Sign in to an account that already has an email (e.g. on a new device).
    async signInEmail(email) {
      if (!client) throw new Error("Cloud saving isn't available right now.");
      const { error } = await client.auth.signInWithOtp({
        email, options: { shouldCreateUser: false, emailRedirectTo: location.origin + location.pathname }
      });
      if (error) throw error;
    }
  };
})();

if (typeof module !== "undefined") module.exports = { mergeSaves, normKey };
