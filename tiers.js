// Items in play for each category, grouped by how well-known they are. An item
// missing here is trimmed (no longer guessable). Original full lists stay in
// puzzles.js, which is still used to restore games saved before trimming.
// RULE: never remove an item that is the answer to a level in levels.js.
const TIERS = {
  "Car brands": {
    "Common": ["Audi","BMW","Ferrari","Fiat","Ford","Honda","Jaguar","Kia","Lamborghini","Land Rover","Lexus","Mazda","Mercedes","MG","Mini","Nissan","Porsche","Renault","Rolls Royce","Seat","Skoda","Suzuki","Tesla","Toyota","Vauxhall","Volkswagen","Volvo","Peugeot","Citroen","Hyundai","Bentley","Aston Martin","Alfa Romeo","Mitsubishi","Subaru","Dodge","Chevrolet","Jeep","Cadillac","Maserati","Bugatti","McLaren","Lotus","Chrysler","Saab","Smart","Dacia","Rover"],
    "Obscure": ["Abarth","Alpine","Austin","BYD","Cupra","Daewoo","Infiniti","Lada","Lancia","Lincoln","Morgan","Proton","Reliant","Triumph","TVR","Hummer","Polestar","Genesis","Maybach","SsangYong","Opel","Caterham","Ariel"],
    "Niche": ["Jensen","Koenigsegg","Pagani","Sunbeam"],
    "Extremely Esoteric": ["Bristol","Hillman"]
  },
  "Types of tree": {
    "Common": ["Apple","Ash","Beech","Birch","Cherry","Chestnut","Elm","Fir","Holly","Hazel","Maple","Oak","Palm","Pine","Willow","Yew","Plum","Pear","Walnut","Lemon","Orange","Olive","Coconut","Sycamore","Poplar","Lime","Elder","Cedar","Eucalyptus","Redwood","Weeping Willow","Horse Chestnut","Silver Birch","Monkey Puzzle","Scots Pine","Spruce","Mango","Magnolia","Hawthorn","Laurel","Mahogany","Teak","Rowan","Sweet Chestnut","Larch"],
    "Obscure": ["Alder","Almond","Aspen","Balsa","Baobab","Bay","Blackthorn","Box","Cypress","Douglas Fir","Ebony","Fig","Ginkgo","Hornbeam","Jacaranda","Juniper","Laburnum","Lilac","Mulberry","Pecan","Quince","Sandalwood","Sequoia","Tulip","Banyan","Norway Spruce","Cacao","Carob","Tamarind","Medlar","Whitebeam"],
    "Niche": ["Linden","Wych Elm"],
    "Extremely Esoteric": ["Zebrano"]
  },
  "Outer space": {
    "Common": ["Asteroid","Astronaut","Big Bang","Black Hole","Comet","Earth","Eclipse","Galaxy","Gravity","Jupiter","Mars","Mercury","Meteor","Milky Way","Moon","Neptune","Orbit","Planet","Pluto","Rocket","Satellite","Saturn","Shuttle","Solar System","Space Station","Star","Sun","Telescope","Universe","Uranus","Venus","NASA","Apollo","Hubble","Constellation","Nebula","Cosmos","Vacuum","Zodiac","Aurora","Weightless","Supernova","Light Year","Crater","Orion","Red Dwarf","Voyager","Sputnik","Cosmonaut"],
    "Obscure": ["Asteroid Belt","Corona","Dark Matter","Europa","Event Horizon","Exoplanet","Ganymede","Halley","Io","Neutron Star","Nova","Pulsar","Quasar","Red Giant","Solar Flare","Spacewalk","Titan","White Dwarf","Wormhole","Andromeda","Gemini","Mir","Singularity","Galileo","Hydrogen"],
    "Niche": ["Parsec","Kuiper Belt","Oort Cloud","Charon","Cassini"],
    "Extremely Esoteric": []
  },
  "Fruits": {
    "Common": ["Apple","Apricot","Avocado","Banana","Blackberry","Blackcurrant","Blueberry","Cherry","Clementine","Coconut","Cranberry","Date","Fig","Gooseberry","Grape","Grapefruit","Kiwi","Lemon","Lime","Mango","Melon","Nectarine","Olive","Orange","Papaya","Passion Fruit","Peach","Pear","Pineapple","Plum","Pomegranate","Raspberry","Rhubarb","Satsuma","Strawberry","Watermelon","Cantaloupe","Honeydew","Sultana","Redcurrant","Damson","Lychee","Dragon Fruit","Conference Pear"],
    "Obscure": ["Bilberry","Elderberry","Greengage","Guava","Jackfruit","Kumquat","Loganberry","Mangosteen","Mulberry","Persimmon","Physalis","Plantain","Pomelo","Prickly Pear","Quince","Rambutan","Sharon Fruit","Sloe","Star Fruit","Tamarind","Yuzu","Crab Apple","Bergamot","Durian","Medlar"],
    "Niche": ["Cherimoya","Feijoa","Jujube","Longan","Loquat","Tamarillo"],
    "Extremely Esoteric": ["Salak","Sapodilla"]
  },
  "Countries": {
    "Common": ["Argentina","Australia","Austria","Belgium","Brazil","Canada","China","Cuba","Denmark","Egypt","Finland","France","Germany","Greece","Iceland","India","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Kenya","Mexico","Netherlands","New Zealand","Nigeria","North Korea","Norway","Pakistan","Poland","Portugal","Russia","Saudi Arabia","South Africa","South Korea","Spain","Sweden","Switzerland","Syria","Thailand","Turkey","Ukraine","United Kingdom","Vietnam","Chile","Peru","Colombia","Cyprus","Croatia","Malta","Morocco","Singapore","Venezuela","Ghana","Zimbabwe","Taiwan","Philippines","Indonesia","Malaysia","Czech Republic","Hungary","Romania"],
    "Obscure": ["Bangladesh","Bolivia","Bulgaria","Ecuador","Estonia","Ethiopia","Guatemala","Lebanon","Myanmar","Nepal","Sri Lanka","Tanzania","Yemen"],
    "Niche": [],
    "Extremely Esoteric": ["Paraguay"]
  },
  "Animals": {
    "Common": ["Alligator","Badger","Bat","Bear","Beaver","Camel","Cat","Cheetah","Chicken","Chimpanzee","Cow","Crocodile","Deer","Dog","Dolphin","Donkey","Duck","Eagle","Elephant","Fox","Frog","Giraffe","Goat","Goose","Gorilla","Hamster","Hedgehog","Hippopotamus","Horse","Jaguar","Kangaroo","Koala","Leopard","Lion","Monkey","Mouse","Ostrich","Owl","Panda","Parrot","Penguin","Pig","Rabbit","Rat","Rhinoceros","Seal","Shark","Sheep","Snake","Squirrel","Swan","Tiger","Tortoise","Turtle","Whale","Wolf","Zebra","Flamingo","Hare","Reindeer"],
    "Obscure": ["Aardvark","Antelope","Bison","Cobra","Gazelle","Hyena","Iguana","Jackal","Lemur","Llama","Meerkat","Orangutan","Otter","Platypus","Porcupine","Sloth","Walrus","Weasel","Wombat"],
    "Niche": [],
    "Extremely Esoteric": []
  },
  "Musical instruments": {
    "Common": ["Accordion","Banjo","Bass Guitar","Bassoon","Bongos","Bugle","Cello","Clarinet","Cymbals","Double Bass","Drums","Flute","French Horn","Glockenspiel","Gong","Guitar","Harmonica","Harp","Harpsichord","Kazoo","Oboe","Organ","Piano","Recorder","Saxophone","Tambourine","Triangle","Trombone","Trumpet","Tuba","Ukulele","Viola","Violin","Xylophone","Bagpipes","Bass Drum","Snare Drum","Castanets","Maracas","Mandolin","Lute","Sitar","Steel Drum","Timpani","Cornet","Synthesizer","Pan Pipes","Didgeridoo","Concertina"],
    "Obscure": ["Baritone","Congas","Djembe","Flugelhorn","Handbells","Harmonium","Kettle Drum","Lyre","Marimba","Melodica","Ocarina","Pipe Organ","Sousaphone","Tabla","Theremin","Vibraphone","Bodhran","Bouzouki","Cor Anglais"],
    "Niche": ["Clavichord","Spinet","Cajon","Clarsach","Oud","Bass Trombone"],
    "Extremely Esoteric": ["Sackbut","Virginal"]
  },
  "Colours": {
    "Common": ["Black","Blue","Brown","Green","Grey","Orange","Pink","Purple","Red","White","Yellow","Gold","Silver","Navy","Turquoise","Cream","Beige","Lilac","Lime","Violet","Indigo","Maroon","Teal","Cyan","Magenta","Peach","Mint","Lavender","Lemon","Rose","Bronze","Copper","Ivory","Sky Blue","Royal Blue","Aqua","Tan","Khaki","Emerald","Crimson","Scarlet","Burgundy","Ruby","Coral","Amber","Charcoal","Olive"],
    "Obscure": ["Apricot","Aquamarine","Azure","Pillar Box Red","Cerise","Chartreuse","Chestnut","Chocolate","Cinnamon","Cobalt","Cornflower","Duck Egg","Jade","Mahogany","Mauve","Mustard","Ochre","Plum","Rust","Saffron","Salmon","Slate","Tangerine"],
    "Niche": ["Periwinkle","Puce","Sienna","Ultramarine","Umber","Vermilion"],
    "Extremely Esoteric": ["Viridian"]
  },
  "Pizza toppings": {
    "Common": ["Anchovies","Bacon","Cheese","Chicken","Chilli","Egg","Garlic","Ham","Mushrooms","Mozzarella","Olives","Onion","Pepperoni","Peppers","Pineapple","Salami","Sausage","Sweetcorn","Tomato","Tuna","Prawns","Beef","Spinach","Basil","BBQ Sauce","Red Onion","Jalapeno","Meatballs","Steak","Chorizo","Cheddar","Baked Beans","Doner Meat","Tikka Chicken","Parmesan","Rocket"],
    "Obscure": ["Artichoke","Asparagus","Aubergine","Avocado","Blue Cheese","Broccoli","Brie","Capers","Caramelised Onion","Courgette","Crab","Feta","Fig","Goat Cheese","Gorgonzola","Halloumi","Honey","Lamb","Mussels","Oregano","Pesto","Pine Nuts","Prosciutto","Ricotta","Salmon","Scallops","Spring Onion","Squid","Sun Dried Tomato","Smoked Salmon","Stilton","Thyme","Pickles","Emmental","Truffle"],
    "Niche": ["Burrata"],
    "Extremely Esoteric": ["Nduja"]
  },
  "Sports": {
    "Common": ["American Football","Archery","Athletics","Badminton","Baseball","Basketball","Boxing","Bowls","Cricket","Cycling","Darts","Diving","Football","Golf","Gymnastics","Hockey","Horse Racing","Ice Hockey","Judo","Karate","Netball","Pool","Rowing","Rugby","Running","Sailing","Skiing","Snooker","Swimming","Table Tennis","Tennis","Volleyball","Wrestling","Formula One","Fishing","Surfing","Squash","Skateboarding","Snowboarding","Curling","Bowling","Rugby League","Rugby Union","Triathlon","Fencing","Climbing","Rounders","Weightlifting","Pole Vault","Sumo","Skydiving","Handball","Polo","Water Polo","Bobsleigh","Canoeing","Motor Racing","Cross Country","Taekwondo"],
    "Obscure": ["Biathlon","Billiards","Croquet","Dressage","Kickboxing","Lacrosse","Motocross","Mountain Biking","Pentathlon","Rallying","Shooting","Speedway","Trampolining"],
    "Niche": ["Orienteering","Real Tennis"],
    "Extremely Esoteric": ["Fell Running"]
  },
  "Vegetables": {
    "Common": ["Carrot","Potato","Tomato","Onion","Garlic","Broccoli","Cauliflower","Cabbage","Lettuce","Spinach","Celery","Cucumber","Courgette","Pepper","Chilli","Sweetcorn","Peas","Green beans","Runner beans","Broad beans","Leek","Radish","Turnip","Swede","Parsnip","Beetroot","Pumpkin","Sweet potato","Mushroom","Brussels sprouts","Asparagus","Aubergine","Spring onion","Kale","Butternut squash","Marrow","Red cabbage","Iceberg lettuce","New potatoes","Corn on the cob","Rocket","Watercress","Chestnut mushroom"],
    "Obscure": ["Shallot","Yam","Artichoke","Bok choy","Fennel","Chard","Endive","Radicchio","Okra","Celeriac","Kohlrabi","Cassava","Horseradish","Rhubarb","Mangetout","Sugar snap peas","Edamame","Purple sprouting broccoli","Savoy cabbage","Spring greens","Jalapeno","Water chestnut","Bean sprouts","Bamboo shoots","Jerusalem artichoke","Jersey Royal","Pointed cabbage","Borlotti beans"],
    "Niche": ["Samphire","Salsify"],
    "Extremely Esoteric": ["Mooli"]
  },
  "Cheeses": {
    "Common": ["Cheddar","Mozzarella","Parmesan","Brie","Camembert","Feta","Gouda","Edam","Cathedral City","Stilton","Halloumi","Ricotta","Mascarpone","Cream cheese","Cottage cheese","Goats cheese","Blue cheese","Cheestrings","Laughing Cow","Babybel","Dairylea","Philadelphia","Mild cheddar","Extra mature cheddar","Red Leicester"],
    "Obscure": ["Gruyere","Roquefort","Gorgonzola","Double Gloucester","Wensleydale","Cheshire","Lancashire","Caerphilly","Jarlsberg","Paneer","Burrata","Boursin","Pecorino","Manchego","Provolone","Derby","Danish Blue","White Stilton","Cornish Yarg","Dolcelatte","Sage Derby","Raclette"],
    "Niche": ["Havarti","Single Gloucester","Taleggio","Fontina","Asiago","Port Salut","Mimolette","Shropshire Blue","Stinking Bishop","Cornish Blue","Brunost","Quark","Labneh","Reblochon","Epoisses","Appenzeller","Grana Padano","Saint Agur","Cashel Blue","Dubliner","Berkswell","Blue Vinny","Lincolnshire Poacher"],
    "Extremely Esoteric": ["Scamorza","Ogleshield","Tunworth","Swaledale","Montgomery"]
  },
  "Herbs and spices": {
    "Common": ["Basil","Parsley","Thyme","Rosemary","Sage","Oregano","Mint","Coriander","Dill","Chives","Salt","Black pepper","Cinnamon","Nutmeg","Cloves","Ginger","Turmeric","Cumin","Paprika","Chilli powder","Chilli flakes","Curry powder","Mixed herbs","Vanilla","Bay leaf","Peppermint","Wasabi","Horseradish"],
    "Obscure": ["Tarragon","Marjoram","Lemongrass","Lavender","Fennel seed","White pepper","Smoked paprika","Cayenne","Saffron","Cardamom","Allspice","Star anise","Aniseed","Mustard seed","Coriander seed","Caraway","Fenugreek","Garam masala","Mace","Juniper","Cajun seasoning","Five spice","Mixed spice","Piri piri","English mustard","Poppy seed","Sesame seed","Cardamom pods","Vanilla pod","Spearmint","Dried chilli","Chervil","Jerk seasoning","Herbes de Provence","Bouquet garni","Tamarind","Curry leaf","Sorrel","Lemon thyme"],
    "Niche": ["Sumac","Zaatar","Ras el hanout","Szechuan pepper","Kaffir lime leaf","Lovage","Borage","Nigella seed","Galangal","Dukkah","Berbere","Angelica"],
    "Extremely Esoteric": ["Asafoetida"]
  },
  "Desserts": {
    "Common": ["Cheesecake","Tiramisu","Apple pie","Brownie","Ice cream","Trifle","Sticky toffee pudding","Banoffee pie","Eton mess","Pavlova","Lemon meringue pie","Mince pie","Apple crumble","Rice pudding","Christmas pudding","Bakewell tart","Custard tart","Profiteroles","Sundae","Banana split","Black Forest gateau","Carrot cake","Chocolate cake","Victoria sponge","Jelly","Arctic roll","Viennetta","Angel delight","Churros","Gelato","Sorbet","Spotted dick","Chocolate mousse","Creme brulee","Panna cotta"],
    "Obscure": ["Rhubarb crumble","Bread and butter pudding","Jam roly-poly","Treacle tart","Egg custard","Creme caramel","Flan","Eclair","Macaron","Baklava","Knickerbocker glory","Baked Alaska","Red velvet cake","Lemon drizzle cake","Blancmange","Cannoli","Crepe Suzette","Souffle","Millionaire shortbread","Tarte tatin","Mille-feuille","Summer pudding","Cherry Bakewell","Manchester tart","Rocky road","Peach Melba","Apple strudel","Gulab jamun","Kulfi","Treacle sponge","Sponge pudding","Fruit tart","Chocolate fondue","Pineapple upside-down cake","Mochi"],
    "Niche": ["Cranachan","Gooseberry fool","Lemon posset","Syllabub","Zabaglione","Affogato","Semifreddo","Cassata","Queen of puddings"],
    "Extremely Esoteric": []
  },
  "Breakfast foods": {
    "Common": ["Bacon","Eggs","Scrambled eggs","Fried eggs","Poached eggs","Boiled eggs","Omelette","Sausage","Toast","Cereal","Porridge","Pancakes","Waffles","French toast","Hash browns","Baked beans","Black pudding","Croissant","Bagel","Muffin","Crumpet","Yogurt","Orange juice","Coffee","Tea","Cornflakes","Weetabix","Shreddies","Cheerios","Rice Krispies","Coco Pops","Frosties","Muesli","Granola","Full English","Beans on toast","Bacon sandwich","Bacon roll","Mushrooms","Grilled tomato","Fried bread","Cheese on toast","Smoothie"],
    "Obscure": ["English muffin","Pain au chocolat","Danish pastry","Fruit salad","Sugar Puffs","Alpen","Special K","Bran flakes","Shredded Wheat","Ready Brek","Golden Grahams","Crunchy Nut","Fruit and fibre","Eggs Benedict","Avocado toast","Kippers","Smoked salmon","Bubble and squeak","Sausage butty","Egg and soldiers","Toasted teacake","Egg McMuffin","Crepes","Marmalade","Kedgeree","Overnight oats","Cinnamon roll","Quiche","Eggy bread","Scotch pancakes","Welsh rarebit","Spaghetti on toast"],
    "Niche": ["Eggs Florentine","Shakshuka","Frittata"],
    "Extremely Esoteric": []
  },
  "Cocktails": {
    "Common": ["Mojito","Margarita","Martini","Cosmopolitan","Old Fashioned","Daiquiri","Pina colada","Bloody Mary","Moscow Mule","Aperol Spritz","Espresso Martini","Gin and tonic","Long Island Iced Tea","Sex on the Beach","Tequila Sunrise","White Russian","Mimosa","Bucks Fizz","Sangria","Pimms","Mulled wine","Irish Coffee","Bellini","Negroni","Manhattan","Mai Tai","Porn Star Martini","Babycham","Jagerbomb","Snowball","Hot toddy","Whiskey Sour"],
    "Obscure": ["Tom Collins","Black Russian","Screwdriver","Harvey Wallbanger","Singapore Sling","Sidecar","Gimlet","Caipirinha","Dark and Stormy","Paloma","Kir Royale","French 75","Sazerac","Mint Julep","Cuba Libre","Pisco Sour","Amaretto Sour","Blue Lagoon","Gin and It","Lemon drop","Appletini","Grasshopper","Brandy Alexander","Bramble","Vesper","Gibson","Snakebite","Sea Breeze","Pink gin","Kamikaze","B-52","Sloe gin fizz","Black Velvet","Whisky Mac","Greyhound","Rusty Nail","Rob Roy","Zombie","Frozen Margarita","Painkiller","Aviation","Godfather"],
    "Niche": ["Stinger","Bees Knees","Corpse Reviver"],
    "Extremely Esoteric": []
  },
  "Sweets and chocolate": {
    "Common": ["Snickers","Mars bar","Twix","Kit Kat","Milky Way","Bounty","Twirl","Flake","Crunchie","Dairy Milk","Wispa","Aero","Galaxy","Toblerone","Smarties","M&Ms","Skittles","Starburst","Haribo","Jelly babies","Wine gums","Polo","Love Hearts","Parma Violets","Liquorice allsorts","Humbugs","Turkish delight","Candy floss","Quality Street","Roses","Celebrations","Ferrero Rocher","Lindor","Chocolate Orange","After Eight","Curly Wurly","Freddo","Double Decker","Creme Egg","Gobstopper","Rolo","Yorkie","Lion bar","Kinder Egg","Kinder Bueno","Walnut Whip","Jelly Tots","Candy cane","Gummy bears","Caramel","Nougat","Sherbet fountain","Fizzy cola bottles","Black Jacks","Refreshers","Revels","Minstrels","Picnic","Boost","Topic","Maltesers"],
    "Obscure": ["Sherbet lemons","Sherbet dip dab","Jelly beans","Liquorice","Cola cubes","Flying Saucers","Everton mints","Chocolate buttons","Caramac","All Gold","Chomp","Tunnocks Caramel Wafer","Black Magic","Werthers Original"],
    "Niche": ["Frys Chocolate Cream"],
    "Extremely Esoteric": []
  },
  "Fast food and restaurant chains": {
    "Common": ["McDonalds","Burger King","KFC","Subway","Pizza Hut","Dominos","Starbucks","Costa","Greggs","Pret a Manger","Nandos","Wagamama","Pizza Express","Zizzi","Prezzo","Harvester","Toby Carvery","Wetherspoons","Wimpy","Little Chef","Krispy Kreme","Caffe Nero","TGI Fridays","Five Guys"],
    "Obscure": ["GBK","Wahaca","Papa Johns","Popeyes","Dishoom","Turtle Bay","Bella Italia","Frankie and Bennys","Beefeater","Yo Sushi","Itsu","Leon","Chiquito","Giraffe","Byron","Shake Shack","Baskin Robbins","Hard Rock Cafe","Ask Italian","Slug and Lettuce","Hungry Horse","Brewers Fayre","Wasabi","Upper Crust","Spud U Like","All Bar One","Harry Ramsdens","Cafe Rouge","Strada","Carluccios","Tortilla","Pizza Pilgrims","Pho","Hawksmoor","Gails","Miller and Carter","Honest Burgers"],
    "Niche": ["Las Iguanas","Barburrito","Pieminister","Loch Fyne","Burger and Lobster","Rosas Thai","Chopstix","Muffin Break","Wildwood","Tossed","Yates","Patisserie Valerie","Sizzling Pubs"],
    "Extremely Esoteric": []
  },
  "Breads and baked goods": {
    "Common": ["White bread","Brown bread","Wholemeal bread","Sourdough","Baguette","Ciabatta","Naan","Pitta bread","Tortilla","Bagel","Croissant","Muffin","Crumpet","Scone","Hot cross bun","Sausage roll","Pasty","Pork pie","Garlic bread","Shortbread","Flapjack","Victoria sponge","Banana bread","Malt loaf","Teacake","Eccles cake","Bap","Cob","Cinnamon roll","Brioche","Bath bun","Chelsea bun","Battenberg cake","Madeleine","Pretzel","Flatbread","Fruit cake","Cheesecake"],
    "Obscure": ["Focaccia","Chapati","Roti","Rye bread","Soda bread","Granary bread","Bloomer","Barm cake","English muffin","Pain au chocolat","Danish pastry","Simnel cake","Challah","Currant bun","Breadsticks","Apple turnover","Strudel","Panettone","Stollen","Cheese scone","Fruit scone","Cream horn","Custard slice","Dundee cake","Bara brith","Welsh cake","Jaffa Cake","Puff pastry","Quiche","Pumpernickel","Belgian bun","Iced bun","Sausage plait","Cottage loaf","Tin loaf"],
    "Niche": ["Pikelet","Chorley cake","Lardy cake","Parkin","Oatcake","Cheese straw","Rock cake","Fairy cake","Yum yum"],
    "Extremely Esoteric": []
  },
  "Soft drinks and beverages": {
    "Common": ["Coca-Cola","Pepsi","Sprite","Fanta","7 Up","Dr Pepper","Irn-Bru","Lucozade","Ribena","Tango","Vimto","Lilt","Ginger beer","Lemonade","Tonic water","Diet Coke","Coke Zero","Pepsi Max","Red Bull","Monster","Capri-Sun","Robinsons","Squash","Orange juice","Apple juice","Smoothie","Milkshake","Hot chocolate","Coffee","Tea","Iced tea","Mineral water","Evian","Volvic","Tropicana","Innocent","Cappuccino","Latte","Flat white","Horlicks","Ovaltine","Fruit Shoot","Prime","Schweppes"],
    "Obscure": ["Mountain Dew","Dandelion and Burdock","Ginger ale","Tizer","Cream soda","Orangeade","Cherryade","Soda water","Rockstar","Gatorade","Powerade","Kia-Ora","Cranberry juice","R Whites","J2O","Oasis","Fentimans","Fever-Tree","Perrier","San Pellegrino","Highland Spring","Lemon barley water","Sunny Delight","Um Bongo","Panda Pops","Shloer","Appletiser","Rubicon","Kombucha","Coconut water","Orangina","Ting","Lipton","Nestea","Crush","Mirinda","Cherry Coke"],
    "Niche": ["Buxton","Barr","Cawston Press"],
    "Extremely Esoteric": []
  },
  "Flowers": {
    "Common": ["Rose","Tulip","Daffodil","Daisy","Sunflower","Lily","Orchid","Carnation","Lavender","Poppy","Violet","Pansy","Marigold","Iris","Hyacinth","Crocus","Snowdrop","Bluebell","Buttercup","Dandelion","Foxglove","Geranium","Primrose","Forget-me-not","Sweet pea","Hydrangea","Jasmine","Lilac","Magnolia","Honeysuckle","Peony","Chrysanthemum","Thistle","Heather","Poinsettia","Wisteria"],
    "Obscure": ["Begonia","Petunia","Dahlia","Camellia","Azalea","Rhododendron","Cowslip","Snapdragon","Anemone","Lupin","Delphinium","Gladiolus","Freesia","Gardenia","Hibiscus","Lotus","Amaryllis","Cyclamen","Fuchsia","Clematis","Nasturtium","Lily of the valley","Gerbera","Edelweiss","Bougainvillea","Bird of paradise","Hollyhock","Sweet William","Cornflower","Busy lizzie","Periwinkle","Agapanthus","Frangipani","Buddleia","Wallflower","Gypsophila"],
    "Niche": ["Zinnia","Aster","Protea","Phlox","Alyssum","Crocosmia","Columbine","Evening primrose"],
    "Extremely Esoteric": []
  },
  "Birds": {
    "Common": ["Robin","Sparrow","Blackbird","Blue tit","Wren","Starling","Magpie","Crow","Raven","Pigeon","Dove","Seagull","Swan","Duck","Goose","Mallard","Heron","Kingfisher","Owl","Eagle","Hawk","Falcon","Swallow","Cuckoo","Woodpecker","Nightingale","Canary","Budgerigar","Parrot","Macaw","Cockatoo","Toucan","Hummingbird","Flamingo","Pelican","Penguin","Puffin","Albatross","Ostrich","Emu","Kiwi","Peacock","Pheasant","Turkey","Chicken","Cockerel","Stork"],
    "Obscure": ["Great tit","Rook","Jackdaw","Jay","Kestrel","Buzzard","Osprey","Condor","Swift","House martin","Skylark","Thrush","Goldfinch","Chaffinch","Bullfinch","Gannet","Cormorant","Cassowary","Partridge","Grouse","Lapwing","Curlew","Crane","Kookaburra","Tawny owl","Long tailed tit","Coot","Ibis","Oystercatcher"],
    "Niche": ["Spoonbill","Lyrebird","Yellowhammer","Linnet","Redwing","Dunlin","Dipper"],
    "Extremely Esoteric": []
  },
  "Dog breeds": {
    "Common": ["Labrador","Golden retriever","German shepherd","Poodle","Bulldog","French bulldog","Beagle","Boxer","Dachshund","Rottweiler","Doberman","Great Dane","Chihuahua","Pug","Jack Russell","Border collie","Husky","Corgi","Greyhound","Dalmatian","Cocker spaniel","Yorkshire terrier","Saint Bernard"],
    "Obscure": ["Shih Tzu","Collie","Springer spaniel","King Charles spaniel","Pomeranian","Maltese","Bichon frise","Alaskan malamute","Samoyed","Akita","Shiba Inu","Chow chow","Whippet","Afghan hound","Basset hound","Bloodhound","Pointer","Irish setter","Weimaraner","Newfoundland","Bernese mountain dog","Mastiff","Bull terrier","Staffordshire bull terrier","West Highland terrier","Scottish terrier","Schnauzer","Old English sheepdog","Irish wolfhound","Borzoi","Cairn terrier","Bullmastiff","Foxhound"],
    "Niche": ["Saluki","Vizsla","Patterdale terrier","Border terrier","Lhasa Apso","Clumber spaniel","Bedlington terrier","Welsh springer spaniel","Skye terrier","Pyrenean mountain dog","Deerhound","Rhodesian ridgeback","Lakeland terrier","Bearded collie","Chinese crested"],
    "Extremely Esoteric": ["Tibetan mastiff"]
  },
  "Fish and sea creatures": {
    "Common": ["Shark","Great white shark","Whale","Blue whale","Killer whale","Orca","Dolphin","Seal","Walrus","Octopus","Squid","Jellyfish","Starfish","Sea horse","Crab","Lobster","Shrimp","Prawn","Oyster","Mussel","Eel","Cod","Haddock","Plaice","Mackerel","Herring","Sardine","Tuna","Swordfish","Salmon","Trout","Goldfish","Piranha","Clownfish","Pufferfish","Turtle","Coral"],
    "Obscure": ["Hammerhead","Humpback whale","Sperm whale","Porpoise","Sea lion","Manatee","Cuttlefish","Giant squid","Barnacle","Clam","Scallop","Whelk","Sea anemone","Moray eel","Electric eel","Stingray","Manta ray","Skate","Sole","Halibut","Turbot","Anchovy","Marlin","Pike","Perch","Carp","Catfish","Sea bass","Barracuda","Sunfish","Whale shark","Basking shark","Sea turtle","Narwhal"],
    "Niche": ["Bream","Sturgeon","Lamprey"],
    "Extremely Esoteric": ["Gurnard"]
  },
  "Insects and bugs": {
    "Common": ["Ant","Bee","Bumblebee","Wasp","Hornet","Butterfly","Moth","Beetle","Ladybird","Fly","Housefly","Bluebottle","Mosquito","Dragonfly","Grasshopper","Cricket","Locust","Praying mantis","Stick insect","Cockroach","Termite","Earwig","Flea","Tick","Firefly","Caterpillar","Spider","Tarantula","Black widow","Scorpion","Centipede","Millipede","Woodlouse","Slug","Snail","Worm"],
    "Obscure": ["Stag beetle","Dung beetle","Daddy long legs","Cranefly","Damselfly","Cicada","Louse","Bed bug","Aphid","Greenfly","Glow worm","Weevil","Silverfish","Mayfly","Lacewing","Hoverfly","Horsefly","Cinnabar moth","Water boatman","Pond skater","Cabbage white","Red admiral","Peacock butterfly","Monarch butterfly","Swallowtail","Painted lady","Hawk moth","Clothes moth","Colorado beetle","Rhinoceros beetle","Harvestman"],
    "Niche": ["Mason bee","Cockchafer","Bombardier beetle","Rove beetle"],
    "Extremely Esoteric": ["Cleg"]
  },
  "Dinosaurs": {
    "Common": ["Tyrannosaurus rex","Triceratops","Stegosaurus","Velociraptor","Brachiosaurus","Diplodocus","Brontosaurus","Pterodactyl","Ankylosaurus","Spinosaurus","Allosaurus"],
    "Obscure": ["Apatosaurus","Iguanodon","Pteranodon","Parasaurolophus","Gallimimus","Compsognathus","Dilophosaurus","Carnotaurus","Giganotosaurus","Megalosaurus","Baryonyx","Utahraptor","Deinonychus","Pachycephalosaurus","Protoceratops","Oviraptor","Archaeopteryx","Mosasaurus","Plesiosaurus","Ichthyosaurus","Liopleurodon","Elasmosaurus","Dimetrodon","Quetzalcoatlus"],
    "Niche": ["Microraptor","Therizinosaurus","Argentinosaurus","Mamenchisaurus","Plateosaurus","Coelophysis","Maiasaura","Edmontosaurus","Corythosaurus","Styracosaurus","Centrosaurus","Torosaurus","Hypsilophodon","Albertosaurus","Troodon","Rhamphorhynchus","Carcharodontosaurus","Dreadnoughtus","Suchomimus","Cetiosaurus","Lambeosaurus","Sinosauropteryx","Herrerasaurus"],
    "Extremely Esoteric": ["Yaverlandia","Aristosuchus","Thecodontosaurus","Mantellisaurus","Eustreptospondylus","Minmi"]
  },
  "Mountains": {
    "Common": ["Everest","K2","Kilimanjaro","Mont Blanc","Matterhorn","Eiger","Olympus","Etna","Vesuvius","Fuji","Mount St Helens","Uluru","Table Mountain","Ben Nevis","Snowdon","Scafell Pike","Mount Sinai"],
    "Obscure": ["Annapurna","Denali","Aconcagua","Jungfrau","Stromboli","Mount Ararat","Krakatoa","Mauna Loa","Mount Cook","Mount Carmel","Mount Kenya","Mount Kosciuszko","Mount Pinatubo","Mount Erebus","Kangchenjunga","Lhotse","Nanga Parbat","Zugspitze","Mount Teide","Helvellyn","Skiddaw","Pen y Fan","Cadair Idris","Tryfan","Kinder Scout","Ingleborough","Pen-y-ghent","Whernside","Ben Lomond","Cairn Gorm","Ben Macdui","Great Gable","Blencathra","Elbrus"],
    "Niche": ["Monte Rosa","Pilatus","Grossglockner","Cotopaxi","Chimborazo","Mount Kinabalu","Schiehallion","Slieve Donard","Carrauntoohil","Bow Fell","Cross Fell","Ben Hope","Mount Toubkal","Brocken","Mulhacen","Great Whernside"],
    "Extremely Esoteric": ["Beinn Eighe","Buachaille Etive Mor","Sgurr Alasdair","Slieve Gullion","Mount Triglav"]
  },
  "Rivers": {
    "Common": ["Nile","Amazon","Yangtze","Mississippi","Danube","Rhine","Thames","Severn","Mersey","Tyne","Clyde","Avon","Seine","Ganges","Jordan","Congo","Volga","Tigris","Euphrates"],
    "Obscure": ["Missouri","Yellow River","Trent","Tees","Wear","Humber","Ouse","Wye","Dee","Tay","Forth","Spey","Tweed","Shannon","Liffey","Loire","Rhone","Elbe","Tiber","Po","Don","Indus","Brahmaputra","Mekong","Niger","Zambezi","Colorado","Hudson","Murray","Orange","Cam","Tamar","Exe","Orinoco","Tagus","Arno","Moselle","Boyne","Foyle","Lagan","Marne","Somme","Garonne","Limpopo","St Lawrence"],
    "Niche": ["Vistula","Ural","Nene","Wharfe","Eden","Ob","Lena","Amur"],
    "Extremely Esoteric": []
  },
  "Islands": {
    "Common": ["Greenland","Ireland","Great Britain","Iceland","Cuba","Sicily","Sardinia","Corsica","Crete","Cyprus","Malta","Majorca","Minorca","Ibiza","Tenerife","Gran Canaria","Lanzarote","Corfu","Rhodes","Santorini","Mykonos","Capri","Isle of Wight","Isle of Man","Anglesey","Jersey","Guernsey","Skye","Jamaica","Barbados","Bahamas","Bermuda","Hawaii","Tahiti","Fiji","Madagascar","Tasmania","Sri Lanka","Bali","Java","Borneo","Sumatra","Manhattan","Singapore","Maldives","Mauritius","Seychelles","Zanzibar","Easter Island","Galapagos"],
    "Obscure": ["Honshu","Hokkaido","New Guinea","Madeira","Gozo","Alderney","Sark","Mull","Islay","Arran","Orkney","Shetland","Lewis","Harris","Iona","Lindisfarne","Lundy","Scilly","Trinidad","Tobago","Jura","St Kilda","Bora Bora","Elba"],
    "Niche": ["Tiree","Eigg"],
    "Extremely Esoteric": []
  },
  "Weather and natural phenomena": {
    "Common": ["Rain","Snow","Hail","Sleet","Fog","Mist","Frost","Wind","Breeze","Gale","Storm","Thunderstorm","Thunder","Lightning","Tornado","Hurricane","Typhoon","Cyclone","Monsoon","Drought","Flood","Heatwave","Blizzard","Rainbow","Drizzle","Shower","Smog","Avalanche","Landslide","Earthquake","Tsunami","Volcano","Eruption","Solar eclipse","Aurora","Northern lights","Full moon","Shooting star","Comet","Geyser","Wildfire","Glacier","Iceberg","Global warming"],
    "Obscure": ["Haze","Whirlwind","Sandstorm","Waterspout","Lunar eclipse","Meteor shower","Cumulus","Cirrus","Cumulonimbus","Jet stream","El Nino","Cold front","Warm front","Beast from the east","Freezing rain","Squall","Equinox","Solstice","Midnight sun","Whirlpool","Flash flood"],
    "Niche": ["La Nina","Scotch mist","Hoar frost"],
    "Extremely Esoteric": ["Sea fret"]
  },
  "Capital cities": {
    "Common": ["London","Paris","Berlin","Madrid","Rome","Lisbon","Dublin","Amsterdam","Brussels","Vienna","Bern","Copenhagen","Stockholm","Oslo","Helsinki","Reykjavik","Warsaw","Prague","Budapest","Athens","Moscow","Cairo","Washington","Ottawa","Mexico City","Havana","Tokyo","Beijing","Seoul","Bangkok","Canberra","Wellington","New Delhi","Jerusalem","Singapore"],
    "Obscure": ["Kyiv","Ankara","Nairobi","Pretoria","Kingston","Lima","Santiago","Buenos Aires","Bogota","Caracas","Brasilia","Hanoi","Manila","Jakarta","Kuala Lumpur","Tehran","Baghdad","Riyadh","Kabul","Islamabad","Kathmandu","Dhaka","Colombo","Damascus","Beirut","Bucharest","Sofia","Belgrade","Zagreb","Valletta","Luxembourg","Monaco","Tallinn","Vilnius","Panama City","Taipei"],
    "Niche": [],
    "Extremely Esoteric": ["Asuncion"]
  },
  "European cities": {
    "Common": ["Barcelona","Milan","Munich","Hamburg","Frankfurt","Venice","Florence","Naples","Rome","Brussels","Seville","Valencia","Marseille","Nice","Geneva","Zurich","Salzburg","Cologne","Glasgow","Birmingham","Istanbul","Rotterdam","Bruges"],
    "Obscure": ["Turin","Lyon","Bordeaux","Toulouse","Dusseldorf","Stuttgart","Dresden","Cork","Porto","Gothenburg","Bergen","Krakow","Gdansk","St Petersburg","Dubrovnik","Split","Antwerp","The Hague","Ghent","Bilbao","Malaga","Granada","Palma","Verona","Bologna","Lucerne","Monte Carlo","Belgrade"],
    "Niche": ["Bremen","Montpellier"],
    "Extremely Esoteric": ["Catania","Graz"]
  },
  "UK towns and cities": {
    "Common": ["London","Birmingham","Manchester","Liverpool","Leeds","Sheffield","Bristol","Newcastle","Nottingham","Leicester","Coventry","Bradford","Cardiff","Swansea","Edinburgh","Glasgow","Aberdeen","Dundee","Belfast","Oxford","Cambridge","Bath","York","Exeter","Plymouth","Southampton","Portsmouth","Brighton","Canterbury","Norwich","Hull","Blackpool","Chester","Stoke","Derby","Wolverhampton","Bournemouth","Reading","Milton Keynes","Dover","Windsor","Sunderland","Middlesbrough"],
    "Obscure": ["Newport","Inverness","Stirling","Perth","Derry","Ipswich","Peterborough","Lincoln","Durham","Carlisle","Lancaster","Preston","Worcester","Gloucester","Cheltenham","Swindon","Salisbury","Winchester","Guildford","Colchester","Hastings","Harrogate","Scarborough","Doncaster","Bolton","Torquay","Weymouth"],
    "Niche": ["Newry"],
    "Extremely Esoteric": ["Lisburn"]
  },
  "Cities of the world": {
    "Common": ["London","Paris","Rome","New York","Tokyo","Sydney","Dubai","Singapore","Hong Kong","Bangkok","Barcelona","Amsterdam","Berlin","Madrid","Vienna","Prague","Athens","Istanbul","Cairo","Moscow","Venice","Edinburgh","Dublin","Los Angeles","Las Vegas","Beijing","Miami","Chicago","Melbourne","Toronto","Lisbon","Budapest","Milan"],
    "Obscure": ["Marrakech","Cape Town","Johannesburg","Nairobi","Lagos","Mumbai","Delhi","Shanghai","Seoul","Osaka","Kyoto","Auckland","San Francisco","Vancouver","Montreal","Mexico City","Havana","Rio de Janeiro","Buenos Aires","Warsaw","Stockholm","Copenhagen","Oslo","Florence","Munich","Zurich","Brussels","Jerusalem","Manila","Sao Paulo"],
    "Niche": ["Colombo","Bogota","Tunis"],
    "Extremely Esoteric": ["Dhaka"]
  },
  "Famous landmarks": {
    "Common": ["Eiffel Tower","Big Ben","Tower Bridge","Buckingham Palace","Stonehenge","Colosseum","Leaning Tower","Taj Mahal","Great Wall","Statue of Liberty","Empire State Building","Golden Gate Bridge","Pyramids","Sphinx","Mount Everest","Niagara Falls","Grand Canyon","White House","London Eye","Tower of London","Westminster Abbey","Windsor Castle","Mount Rushmore","Sydney Opera House","Louvre","Vatican","Pompeii","Berlin Wall"],
    "Obscure": ["Machu Picchu","Parthenon","Acropolis","Brandenburg Gate","Arc de Triomphe","Notre Dame","Sagrada Familia","Alhambra","Kremlin","Red Square","Hagia Sophia","Petra","Angkor Wat","Forbidden City","Christ the Redeemer","Times Square","Alcatraz","Brooklyn Bridge","Edinburgh Castle","Giants Causeway","White Cliffs","Blackpool Tower","Angel of the North","St Pauls Cathedral","Trafalgar Square","Piccadilly Circus","Burj Khalifa","The Shard","The Gherkin","Uluru","Mount Fuji","Matterhorn","Versailles","Sistine Chapel","Trevi Fountain","Little Mermaid","Atomium","Victoria Falls","Great Barrier Reef","Kensington Palace","Table Mountain","Blue Mosque","Durdle Door","Neuschwanstein"],
    "Niche": ["Spanish Steps","Rialto Bridge","Ironbridge"],
    "Extremely Esoteric": ["Humber Bridge","Clifton Suspension Bridge"]
  },
  "Languages": {
    "Common": ["English","Spanish","French","German","Italian","Portuguese","Dutch","Russian","Chinese","Japanese","Arabic","Latin","Welsh","Greek","Mandarin","Hindi","Polish","Korean","Swedish"],
    "Obscure": ["Norwegian","Danish","Finnish","Icelandic","Czech","Hungarian","Turkish","Hebrew","Urdu","Bengali","Punjabi","Cantonese","Vietnamese","Thai","Indonesian","Swahili","Irish","Gaelic","Scottish Gaelic","Cornish","Esperanto","Basque","Catalan","Romanian","Bulgarian","Ukrainian","Persian","Tamil","Zulu","Afrikaans","Yiddish","Maori","Scots","Sanskrit","Ancient Greek"],
    "Niche": ["Somali","Maltese","Kurdish","Breton","Luxembourgish","Macedonian"],
    "Extremely Esoteric": ["Uzbek"]
  },
  "Currencies": {
    "Common": ["Dollar","Pound","Euro","Yen","Penny","Cent","Sterling","US Dollar","Bitcoin","Peso","Franc","Rupee","Rouble","Lira","Drachma","Peseta","Deutsche Mark"],
    "Obscure": ["Yuan","Renminbi","Rand","Krona","Krone","Zloty","Real","Dirham","Won","Baht","Shilling","Punt","Guilder","Schilling","Escudo","Dinar","Shekel","Ethereum","Dogecoin","Swiss Franc","Canadian Dollar","Australian Dollar","Forint","Riyal","Ringgit","Naira"],
    "Niche": ["Koruna","Rupiah","Dong","Cedi","Kwacha","Birr","Lev","Leu","Hryvnia","Lek","Tenge","Taka","Argentine Peso","Czech Koruna","Saudi Riyal","Kuwaiti Dinar","Pakistani Rupee","Colombian Peso"],
    "Extremely Esoteric": ["Quetzal"]
  },
  "Airlines": {
    "Common": ["British Airways","Virgin Atlantic","easyJet","Ryanair","Jet2","TUI","Lufthansa","Air France","KLM","Emirates","Qantas","American Airlines","Delta","United Airlines","Pan Am","Qatar Airways","Etihad","Singapore Airlines","Cathay Pacific","Aer Lingus","Thomas Cook Airlines","Flybe","Air Canada","Turkish Airlines"],
    "Obscure": ["Norwegian","Wizz Air","Iberia","Vueling","Alitalia","Swiss","Austrian Airlines","SAS","Finnair","TAP Portugal","Aegean","Aeroflot","El Al","Ethiopian Airlines","South African Airways","Air India","IndiGo","Malaysia Airlines","AirAsia","Thai Airways","Japan Airlines","ANA","Korean Air","Virgin Australia","Jetstar","Air New Zealand","Southwest","JetBlue","Laker Airways","Monarch","Air Berlin","Condor","Royal Air Maroc"],
    "Niche": ["Loganair","Icelandair","Air Malta","Oman Air","Gulf Air","Brussels Airlines","Kenya Airways","Air China"],
    "Extremely Esoteric": ["Croatia Airlines","Smartwings"]
  },
  "Theme parks and attractions": {
    "Common": ["Disneyland","Walt Disney World","Disneyland Paris","Alton Towers","Thorpe Park","Legoland","Chessington","Blackpool Pleasure Beach","Madame Tussauds","British Museum","Tate Modern","Natural History Museum","Science Museum","London Zoo","Chester Zoo","Eden Project","Kew Gardens","Universal Studios","SeaWorld","Peppa Pig World","Warwick Castle","London Dungeon","Sea Life","Cadbury World","Longleat","Whipsnade","Warner Bros Studio Tour","Drayton Manor","Magic Kingdom","Epcot"],
    "Obscure": ["Flamingo Land","Paultons Park","Adventure Island","Efteling","Europa Park","PortAventura","Parc Asterix","Tivoli Gardens","Disney California Adventure","Tokyo Disneyland","Hong Kong Disneyland","Animal Kingdom","Hollywood Studios","Universal Orlando","Islands of Adventure","Cedar Point","San Diego Zoo","Kennedy Space Center","Roman Baths","Jorvik","Bletchley Park","Go Ape","Dreamland","Wizarding World","Beamish","Crealy","Legoland Windsor"],
    "Niche": ["Phantasialand","Liseberg","Tokyo DisneySea","Everland","Lotte World","Fantasy Island","Siam Park","Loro Parque"],
    "Extremely Esoteric": ["Toverland","Bobbejaanland","Parque Warner","Terra Mitica"]
  },
  "Disney characters": {
    "Common": ["Mickey Mouse","Minnie Mouse","Donald Duck","Goofy","Pluto","Simba","Elsa","Anna","Olaf","Ariel","Belle","Beast","Aladdin","Jasmine","Genie","Cinderella","Snow White","Peter Pan","Tinker Bell","Captain Hook","Pinocchio","Dumbo","Bambi","Winnie the Pooh","Tigger","Eeyore","Piglet","Alice","Stitch","Woody","Buzz Lightyear","Rapunzel","Mulan","Moana","Hercules","Cruella de Vil","Scar","Mufasa","Timon","Pumbaa","Maleficent","Dopey","Mad Hatter","Cheshire Cat","Baloo","Mowgli","Tarzan"],
    "Obscure": ["Daisy Duck","Nala","Kristoff","Sven","Maui","Ursula","Sebastian","Gaston","Mrs Potts","Jafar","Abu","Aurora","Pocahontas","Hades","Queen of Hearts","Lilo","Tiana","Mushu","Megara","Merida","Quasimodo","Lady Tremaine"],
    "Niche": ["Prince Eric","Flynn Rider"],
    "Extremely Esoteric": ["Prince Phillip"]
  },
  "Animated films": {
    "Common": ["Toy Story","Toy Story 2","Toy Story 3","Finding Nemo","The Lion King","Frozen","Moana","Shrek","Aladdin","Beauty and the Beast","The Little Mermaid","Cinderella","Snow White","Pinocchio","Dumbo","Bambi","The Jungle Book","Up","Cars","Monsters Inc","Despicable Me","Minions","Ice Age","Madagascar","Kung Fu Panda","Inside Out","WALL-E","Ratatouille","Chicken Run","The Incredibles","101 Dalmatians","Sleeping Beauty","Peter Pan","The Snowman","Fantasia","Tangled","Coco"],
    "Obscure": ["Frozen II","Brave","Monsters University","How to Train Your Dragon","Rio","Lady and the Tramp","The Aristocats","Hercules","Mulan","Tarzan","The Hunchback of Notre Dame","Lilo and Stitch","Zootopia","Big Hero 6","Encanto","Wreck-It Ralph","Spirited Away","The Iron Giant","The Prince of Egypt","A Bugs Life","The Wrong Trousers","Animal Farm","Yellow Submarine","Sing","The Secret Life of Pets","Watership Down","Arthur Christmas","Coraline","The Nightmare Before Christmas","Fantastic Mr Fox","The Lego Movie","Gnomeo and Juliet","The Emperors New Groove","The Gruffalo","Shaun the Sheep Movie","A Matter of Loaf and Death"],
    "Niche": ["My Neighbour Totoro","Princess Mononoke","Howls Moving Castle","Spider-Man Into the Spider-Verse"],
    "Extremely Esoteric": ["Early Man"]
  },
  "Superheroes and villains": {
    "Common": ["Superman","Batman","Wonder Woman","Spider-Man","Iron Man","Captain America","Thor","Hulk","Black Widow","Joker","Catwoman","Robin","Wolverine","Deadpool","Flash","Aquaman","Harley Quinn","Penguin","Loki","Thanos","Black Panther","Green Lantern","Venom","Magneto","Doctor Strange","Ant-Man","Hawkeye","Supergirl","Bananaman","Lex Luthor"],
    "Obscure": ["Captain Marvel","Scarlet Witch","Vision","Falcon","Star-Lord","Gamora","Rocket","Groot","Cyclops","Storm","Professor X","Mystique","Rogue","Beast","Batgirl","Nightwing","Riddler","Two-Face","Bane","Poison Ivy","General Zod","Green Goblin","Doctor Octopus","Sandman","Vulture","Kingpin","Ultron","Red Skull","Galactus","Doctor Doom","Mister Fantastic","The Thing","Daredevil","Hellboy","Ghost Rider","Wasp","Judge Dredd"],
    "Niche": ["Darkseid"],
    "Extremely Esoteric": ["Captain Britain"]
  },
  "Board games": {
    "Common": ["Monopoly","Scrabble","Cluedo","Risk","Trivial Pursuit","Pictionary","Battleship","Connect Four","Jenga","Operation","Mouse Trap","Twister","Uno","Chess","Draughts","Backgammon","Ludo","Snakes and Ladders","Guess Who","Boggle","Yahtzee","Dominoes","Bingo","Kerplunk","Buckaroo","Hungry Hippos","Mastermind","Cards Against Humanity","Taboo","Articulate"],
    "Obscure": ["Catan","Ticket to Ride","Carcassonne","Pandemic","Sorry","The Game of Life","Stratego","Othello","Balderdash","Scattergories","Mahjong","Go","Trouble","Exploding Kittens","Dungeons and Dragons","Warhammer","Cribbage","Rummikub","Happy Families","Rummy","Subbuteo","Bananagrams","Tiddlywinks","Shut the Box","Codenames","Blockbusters","Pop Up Pirate","Cluedo Junior","Scotland Yard","Diplomacy","Beetle"],
    "Niche": ["Azul","Splendor","Dominion","Jungle Speed","Hive","Escape from Colditz","HeroQuest","Absolute Balderdash","Formula One"],
    "Extremely Esoteric": ["Fox and Geese","Nine Mens Morris"]
  },
  "Video games": {
    "Common": ["Mario Kart","Super Mario Bros","Pokemon","Minecraft","Fortnite","Tetris","Pac-Man","Pong","Sonic the Hedgehog","Space Invaders","Call of Duty","Grand Theft Auto","FIFA","The Sims","Angry Birds","Candy Crush","Wii Sports","Just Dance","Donkey Kong","The Legend of Zelda","Tomb Raider","Street Fighter","Mortal Kombat","Halo","Crash Bandicoot","Guitar Hero","Football Manager","Worms"],
    "Obscure": ["Tekken","Fall Guys","Red Dead Redemption","The Witcher","Skyrim","Fallout","Elden Ring","God of War","Uncharted","The Last of Us","Resident Evil","Metal Gear Solid","Final Fantasy","Assassins Creed","Far Cry","Gran Turismo","Forza","Need for Speed","Civilization","Age of Empires","World of Warcraft","Overwatch","League of Legends","Counter-Strike","Half-Life","Portal","Doom","Rocket League","Among Us","Animal Crossing","Super Smash Bros","Kirby","Fruit Ninja","Championship Manager","Stardew Valley","Fable","SingStar"],
    "Niche": ["Mass Effect","Dark Souls","Wolfenstein","Luigis Mansion","Sensible Soccer"],
    "Extremely Esoteric": ["Dizzy","Manic Miner","Jet Set Willy"]
  },
  "TV sitcoms": {
    "Common": ["Friends","Seinfeld","Frasier","Cheers","The Office","Modern Family","The Big Bang Theory","Scrubs","The Golden Girls","The Fresh Prince of Bel-Air","Only Fools and Horses","Fawlty Towers","Blackadder","Dads Army","Porridge","Red Dwarf","The Vicar of Dibley","Absolutely Fabulous","Keeping Up Appearances","One Foot in the Grave","Open All Hours","Last of the Summer Wine","Are You Being Served","Allo Allo","The Good Life","Gavin and Stacey","Peep Show","The Inbetweeners","Father Ted","The IT Crowd","Miranda","Mrs Browns Boys","Benidorm","Fleabag","Derry Girls","The Young Ones","Ghosts","Ted Lasso"],
    "Obscure": ["How I Met Your Mother","Curb Your Enthusiasm","Malcolm in the Middle","That 70s Show","Schitts Creek","The Thick of It","Still Game","Brassic","Hi-de-Hi","Yes Minister","Steptoe and Son","Till Death Us Do Part","Rising Damp","Bread","Black Books","Outnumbered","My Family","Men Behaving Badly","Spaced","Phoenix Nights","Not Going Out","Detectorists","Friday Night Dinner","The Royle Family","Rev","On the Buses","To the Manor Born","Some Mothers Do Ave Em"],
    "Niche": ["This Country","Drop the Dead Donkey","Hancocks Half Hour"],
    "Extremely Esoteric": ["Butterflies","Ever Decreasing Circles","Stath Lets Flats"]
  },
  "Musicals": {
    "Common": ["Les Miserables","The Phantom of the Opera","Cats","Wicked","Hamilton","The Lion King","Mamma Mia","Chicago","Grease","West Side Story","The Sound of Music","Oliver","Matilda","Billy Elliot","Annie","Joseph","Mary Poppins","Chitty Chitty Bang Bang","Frozen","Beauty and the Beast","Aladdin"],
    "Obscure": ["Evita","Jesus Christ Superstar","Starlight Express","Miss Saigon","Rent","Hairspray","Fiddler on the Roof","Oklahoma","Carousel","South Pacific","The King and I","My Fair Lady","Bugsy Malone","Cabaret","Guys and Dolls","Kinky Boots","The Book of Mormon","Six","The Little Mermaid","Singin in the Rain","Sweeney Todd","Little Shop of Horrors","The Rocky Horror Show","Spamalot","The Producers","Legally Blonde","Mean Girls","School of Rock","Dirty Dancing","Charlie and the Chocolate Factory","Saturday Night Fever","We Will Rock You","Jersey Boys","Sister Act","The Bodyguard","Blood Brothers","Back to the Future","Bat Out of Hell","Only Fools and Horses The Musical","Dear Evan Hansen","Everybodys Talking About Jamie","Moulin Rouge","Priscilla Queen of the Desert","Funny Girl"],
    "Niche": ["A Chorus Line","Operation Mincemeat","Sunset Boulevard"],
    "Extremely Esoteric": ["Aspects of Love","Whistle Down the Wind"]
  },
  "Harry Potter names and things": {
    "Common": ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore","Severus Snape","Lord Voldemort","Rubeus Hagrid","Draco Malfoy","Neville Longbottom","Luna Lovegood","Sirius Black","Dobby","Hedwig","Hogwarts","Gryffindor","Slytherin","Hufflepuff","Ravenclaw","Quidditch","Golden Snitch","Philosophers Stone","Horcrux","Dementor","Butterbeer","Expecto Patronum","Platform Nine and Three Quarters","Diagon Alley","Sorting Hat","Azkaban","Invisibility Cloak","Death Eaters","Deathly Hallows","Avada Kedavra"],
    "Obscure": ["Ginny Weasley","Fred Weasley","Remus Lupin","Peter Pettigrew","Minerva McGonagall","Bellatrix Lestrange","Lucius Malfoy","Narcissa Malfoy","Crookshanks","Scabbers","Fawkes","Buckbeak","Nagini","Fluffy","Aragog","Moaning Myrtle","Nearly Headless Nick","Cho Chang","Fleur Delacour","Dolores Umbridge","Petunia Dursley","Hogsmeade","Patronus","Expelliarmus","Wingardium Leviosa"],
    "Niche": ["Peeves","Filch","Quaffle","Bludger","Firebolt","Resurrection Stone","Alohomora"],
    "Extremely Esoteric": []
  },
  "Cartoon characters": {
    "Common": ["Bugs Bunny","Daffy Duck","Porky Pig","Elmer Fudd","Tweety","Sylvester","Road Runner","Wile E Coyote","Tom","Jerry","Scooby-Doo","Shaggy","Fred Flintstone","Bagpuss","Yogi Bear","Paddington","Top Cat","Popeye","Pink Panther","Bart Simpson","Homer Simpson","Marge Simpson","Lisa Simpson","Peter Griffin","Dennis the Menace","SpongeBob SquarePants","Peppa Pig","Bluey","Danger Mouse","Snoopy","Garfield","Tintin","Asterix","Rupert Bear","He-Man","Optimus Prime","Leonardo","Raphael","Michelangelo","Donatello","Bob the Builder","Fireman Sam","Postman Pat","Noddy","Wallace","Gromit","Shaun the Sheep","Pingu","Thomas the Tank Engine","Dino"],
    "Obscure": ["Speedy Gonzales","Dick Dastardly","Muttley","Olive Oyl","Bluto","Betty Boop","Felix the Cat","Woody Woodpecker","Mr Magoo","Mr Krabs","SuperTed","Bananaman","Charlie Brown","Linus","Lucy","Odie","Obelix","Ben 10","Skeletor","Inspector Gadget"],
    "Niche": ["Roobarb","Orinoco"],
    "Extremely Esoteric": []
  },
  "Rock and pop bands": {
    "Common": ["Beatles","Rolling Stones","Queen","Led Zeppelin","Pink Floyd","U2","Coldplay","Oasis","Blur","Radiohead","ABBA","Bee Gees","Fleetwood Mac","Eagles","Nirvana","Metallica","AC/DC","Guns N Roses","Take That","Spice Girls","Backstreet Boys","Westlife","One Direction","Little Mix","Girls Aloud","Madness","Police","Who","Green Day","Arctic Monkeys","Muse","Red Hot Chili Peppers","Bon Jovi","Beach Boys","Black Sabbath","Iron Maiden","Sex Pistols","Genesis","Sugababes","Wham","Boyzone","Busted","McFly","S Club 7","Steps"],
    "Obscure": ["Deep Purple","Manic Street Preachers","Duran Duran","Spandau Ballet","Culture Club","Depeche Mode","New Order","Joy Division","Smiths","Cure","Clash","Jam","Dire Straits","Roxy Music","Pet Shop Boys","Stone Roses","Gorillaz","REM","Foo Fighters","Pearl Jam","Killers","Verve","Pulp","Suede","Kaiser Chiefs","Franz Ferdinand"],
    "Niche": [],
    "Extremely Esoteric": []
  },
  "Female solo singers": {
    "Common": ["Beyonce","Madonna","Adele","Taylor Swift","Rihanna","Lady Gaga","Whitney Houston","Mariah Carey","Celine Dion","Dolly Parton","Cher","Tina Turner","Aretha Franklin","Diana Ross","Kylie Minogue","Britney Spears","Christina Aguilera","Katy Perry","Shakira","Jennifer Lopez","Amy Winehouse","Dua Lipa","Ariana Grande","Billie Eilish","Miley Cyrus","Pink","Alicia Keys","Shirley Bassey","Cheryl"],
    "Obscure": ["Sia","Lana Del Rey","Sinead OConnor","Annie Lennox","Kate Bush","Dusty Springfield","Cilla Black","Vera Lynn","Olivia Newton-John","Barbra Streisand","Judy Garland","Ella Fitzgerald","Billie Holiday","Nina Simone","Janis Joplin","Joni Mitchell","Carole King","Stevie Nicks","Cyndi Lauper","Janet Jackson","Donna Summer","Lily Allen","Ellie Goulding","Olivia Rodrigo","Nicki Minaj","Kelly Clarkson","Avril Lavigne","Alanis Morissette","Natalie Imbruglia","Norah Jones","Enya","Bjork","Katie Melua","Joss Stone","Shania Twain","Anne-Marie"],
    "Niche": ["Etta James","Raye"],
    "Extremely Esoteric": []
  },
  "Male solo singers": {
    "Common": ["Elvis Presley","Frank Sinatra","Michael Jackson","David Bowie","Elton John","Prince","Bob Dylan","Bruce Springsteen","Paul McCartney","John Lennon","George Michael","Freddie Mercury","Rod Stewart","Phil Collins","Sting","Bob Marley","Stevie Wonder","Johnny Cash","Mick Jagger","Tom Jones","Cliff Richard","Ed Sheeran","Justin Bieber","Eminem","Harry Styles","Robbie Williams","Rick Astley","Ozzy Osbourne","Jimi Hendrix","Eric Clapton","Bing Crosby","Justin Timberlake","Bruno Mars","Drake","Kanye West","Jay-Z","Snoop Dogg","Sam Smith","Lewis Capaldi","Gary Barlow","Liam Gallagher","Michael Buble","Luciano Pavarotti","Andrea Bocelli","Barry Manilow","Neil Diamond","Billy Joel"],
    "Obscure": ["Ray Charles","Marvin Gaye","Sam Cooke","Nat King Cole","Tony Bennett","Kendrick Lamar","Peter Andre","Morrissey","Chuck Berry","Buddy Holly","Bill Withers","Al Green","John Legend","Pharrell Williams","Paul Simon","Cat Stevens","Leonard Cohen","Stormzy","Paul Weller","Chris Brown"],
    "Niche": ["Tom Grennan"],
    "Extremely Esoteric": []
  },
  "Famous painters": {
    "Common": ["Leonardo da Vinci","Michelangelo","Raphael","Rembrandt","Vermeer","Picasso","Dali","Monet","Renoir","Van Gogh","Turner","Constable","Banksy","David Hockney","Warhol","Frida Kahlo","Matisse","Munch","Klimt","Lowry","Damien Hirst","Tracey Emin","Manet","Degas","Botticelli","Caravaggio","Pollock","Francis Bacon","Magritte","Cezanne","Gauguin","Goya","Hogarth","Titian"],
    "Obscure": ["Gainsborough","Rubens","Van Dyck","Bosch","Durer","Holbein","Van Eyck","Velazquez","El Greco","Miro","Seurat","Toulouse-Lautrec","Kandinsky","Mondrian","Chagall","Modigliani","Rothko","Edward Hopper","Georgia OKeeffe","Norman Rockwell","Rossetti","Millais","William Blake","Lucian Freud","Basquiat","Lichtenstein","Grayson Perry","Stanley Spencer","Delacroix","Braque"],
    "Niche": ["Burne-Jones"],
    "Extremely Esoteric": []
  },
  "Music genres": {
    "Common": ["Rock","Pop","Jazz","Blues","Country","Folk","Classical","Opera","Reggae","Ska","Punk","Metal","Heavy metal","Hip hop","Rap","R and B","Soul","Funk","Disco","House","Techno","Dance","Electronic","Indie","Gospel","Swing","Acoustic","Soundtrack"],
    "Obscure": ["Trance","Dubstep","Drum and bass","Garage","Grime","Jungle","Ambient","Alternative","Grunge","Emo","Goth","New wave","Synthpop","Britpop","Country rock","Bluegrass","Latin","Salsa","Dub","K-pop","Motown","Rockabilly","Musical theatre","Baroque","Choral","Chant","A cappella","Flamenco","Rave","Reggaeton"],
    "Niche": ["Northern soul","Madchester","Post-punk"],
    "Extremely Esoteric": ["Two tone","Acid jazz"]
  },
  "Shakespeare characters": {
    "Common": ["Hamlet","Macbeth","Romeo","Juliet","Othello","King Lear","Lady Macbeth","Ophelia","Puck","Shylock","Prospero","Julius Caesar","Cleopatra","Iago","Falstaff","Banquo","Titania","Oberon","Mark Antony","Brutus","Portia","Henry V","Richard III","Desdemona","Caliban","Ariel","Mercutio","Bottom","Malvolio"],
    "Obscure": ["Polonius","Claudius","Gertrude","Laertes","Horatio","Yorick","Rosencrantz","Macduff","Tybalt","Cordelia","Miranda","Hermia","Helena","Theseus","Viola","Olivia","Sir Toby Belch","Beatrice","Benedick","Rosalind","Orlando","Petruchio","Katherina","Prince Hal","Cassius","Hermione","Titus Andronicus"],
    "Niche": ["Hotspur","Quince","Perdita","Celia","Coriolanus","Sebastian","Ferdinand"],
    "Extremely Esoteric": []
  },
  "Fairy tale characters": {
    "Common": ["Cinderella","Snow White","Sleeping Beauty","Rapunzel","Little Red Riding Hood","Hansel","Gretel","Goldilocks","Big Bad Wolf","Rumpelstiltskin","Pinocchio","Peter Pan","Tinker Bell","Captain Hook","Alice","Mad Hatter","Queen of Hearts","Cheshire Cat","White Rabbit","Beauty","Beast","Prince Charming","Fairy Godmother","Wicked Stepmother","Ugly Sisters","Evil Queen","Grumpy","Dopey","Sleepy","Happy","Sneezy","Bashful","Doc","Aladdin","Genie","Puss in Boots","Humpty Dumpty","Three Little Pigs","Gingerbread Man","Three Bears","Little Mermaid","Ugly Duckling","Dorothy","Scarecrow","Tin Man","Cowardly Lion","Jack","Giant","Wendy"],
    "Obscure": ["Thumbelina","Snow Queen","Frog Prince","Pied Piper","Ali Baba","Tom Thumb","Maleficent","Dormouse","Billy Goats Gruff","Chicken Licken","Jack Frost"],
    "Niche": ["Baba Yaga","Little Red Hen","Mr Fox"],
    "Extremely Esoteric": ["Tom Tit Tot","Rose Red","Wishee Washee","Gerda","Hans"]
  },
  "Male film actors": {
    "Common": ["Tom Hanks","Tom Cruise","Brad Pitt","Leonardo DiCaprio","Johnny Depp","Robert De Niro","Al Pacino","Jack Nicholson","Denzel Washington","Morgan Freeman","Harrison Ford","Clint Eastwood","Sylvester Stallone","Arnold Schwarzenegger","Bruce Willis","Will Smith","Matt Damon","George Clooney","Samuel L Jackson","Anthony Hopkins","Hugh Jackman","Mel Gibson","Keanu Reeves","Robin Williams","Jim Carrey","Eddie Murphy","Rowan Atkinson","Charlie Chaplin","Sean Connery","Roger Moore","Daniel Craig","Michael Caine","Daniel Radcliffe","Jackie Chan","Bruce Lee","Dwayne Johnson","Jason Statham","John Wayne"],
    "Obscure": ["Ben Affleck","Daniel Day-Lewis","Christian Bale","Russell Crowe","Bill Murray","Dustin Hoffman","Marlon Brando","James Dean","Paul Newman","Robert Redford","Steve McQueen","Humphrey Bogart","Cary Grant","James Stewart","Hugh Grant","Colin Firth","Ewan McGregor","Jude Law","Orlando Bloom","Benedict Cumberbatch","Tom Hardy","Idris Elba","Eddie Redmayne","Alan Rickman","Liam Neeson","Robert Downey Jr","Chris Hemsworth","Chris Evans","Robert Pattinson","Ryan Reynolds","Ryan Gosling","Joaquin Phoenix","Matthew McConaughey","Nicolas Cage","John Travolta","Michael Douglas","Vin Diesel","Ian McKellen","Patrick Stewart","Pierce Brosnan","Bill Nighy","Peter Sellers","Gary Oldman","Michael Gambon","Gregory Peck","Hugh Laurie","Sean Bean","Ben Kingsley","David Niven","Colin Farrell","Cillian Murphy","Ralph Fiennes","Andrew Garfield","Timothee Chalamet"],
    "Niche": ["Tom Hiddleston","Alec Guinness","Laurence Olivier","Richard Burton","Jeremy Irons","Gene Hackman","Kenneth Branagh"],
    "Extremely Esoteric": []
  },
  "Actresses": {
    "Common": ["Meryl Streep","Julia Roberts","Sandra Bullock","Nicole Kidman","Kate Winslet","Angelina Jolie","Jennifer Lawrence","Scarlett Johansson","Emma Watson","Jennifer Aniston","Judi Dench","Maggie Smith","Helen Mirren","Audrey Hepburn","Marilyn Monroe","Elizabeth Taylor","Julie Andrews","Whoopi Goldberg","Jennifer Lopez","Joanna Lumley","Dawn French","Jennifer Saunders","Cher","Joan Collins","Keira Knightley","Cameron Diaz","Drew Barrymore","Emma Thompson","Julie Walters","Barbra Streisand"],
    "Obscure": ["Cate Blanchett","Emma Stone","Natalie Portman","Anne Hathaway","Reese Witherspoon","Charlize Theron","Halle Berry","Julianne Moore","Rachel Weisz","Kate Beckinsale","Helena Bonham Carter","Olivia Colman","Carey Mulligan","Katharine Hepburn","Grace Kelly","Ingrid Bergman","Bette Davis","Vivien Leigh","Judy Garland","Sophia Loren","Brigitte Bardot","Marlene Dietrich","Greta Garbo","Joan Crawford","Sheridan Smith","Lauren Bacall","Doris Day","Jane Fonda","Susan Sarandon","Sigourney Weaver","Michelle Pfeiffer","Sharon Stone","Demi Moore","Meg Ryan","Goldie Hawn","Diane Keaton","Glenn Close","Jodie Foster","Uma Thurman","Winona Ryder","Kathy Bates","Frances McDormand","Zendaya","Margot Robbie","Amy Adams","Emily Blunt","Gwyneth Paltrow","Renee Zellweger","Penelope Cruz","Salma Hayek","Kristen Stewart","Florence Pugh","Millie Bobby Brown","Emilia Clarke","Jamie Lee Curtis","Gal Gadot","Daisy Ridley"],
    "Niche": ["Ava Gardner","Julie Christie","Viola Davis","Jessica Chastain","Saoirse Ronan","Gemma Arterton","Rosamund Pike","Claire Foy","Vanessa Redgrave","Felicity Jones"],
    "Extremely Esoteric": []
  },
  "Film directors": {
    "Common": ["Steven Spielberg","Martin Scorsese","Quentin Tarantino","Christopher Nolan","Stanley Kubrick","Alfred Hitchcock","George Lucas","James Cameron","Ridley Scott","Tim Burton","Peter Jackson","Clint Eastwood","Woody Allen","Charlie Chaplin","Michael Bay","Guy Ritchie","Richard Curtis"],
    "Obscure": ["Francis Ford Coppola","David Fincher","Orson Welles","Steven Soderbergh","Wes Anderson","Oliver Stone","Ron Howard","Robert Zemeckis","Rob Reiner","David Lynch","Guillermo del Toro","Sam Mendes","Danny Boyle","Edgar Wright","Mike Leigh","Ken Loach","David Lean","Ang Lee","Denis Villeneuve","Greta Gerwig","Kathryn Bigelow","Taika Waititi","Jordan Peele","Zack Snyder","JJ Abrams","Mel Brooks","Steve McQueen","Roman Polanski","Sergio Leone","Hayao Miyazaki","Akira Kurosawa","Richard Attenborough","Baz Luhrmann","Kenneth Branagh","Billy Wilder","John Ford","Frank Capra","Sam Raimi","Spike Lee","Paul Greengrass","James Wan","Tom Hooper","John Carpenter","Wes Craven","Terry Gilliam","Ingmar Bergman","Federico Fellini","Tony Scott","John Hughes","Joel Coen","Ethan Coen","Matthew Vaughn","Darren Aronofsky"],
    "Niche": ["David Cronenberg","Alfonso Cuaron","Pedro Almodovar","Werner Herzog","Fritz Lang","Michael Powell","Zhang Yimou","Bong Joon-ho","Jane Campion","Sofia Coppola","Ryan Coogler","Stephen Frears","Nicolas Roeg","Andrea Arnold","Carol Reed","Paul Verhoeven","Luc Besson","Jean-Luc Godard","Francois Truffaut","Terrence Malick","Paul Thomas Anderson","Mike Newell","Alan Parker","George Miller","Anthony Minghella"],
    "Extremely Esoteric": []
  },
  "Footballers": {
    "Common": ["Pele","Diego Maradona","Lionel Messi","Cristiano Ronaldo","Neymar","David Beckham","Wayne Rooney","Steven Gerrard","Frank Lampard","Gary Lineker","Alan Shearer","Harry Kane","Bobby Moore","Paul Gascoigne","George Best","Zinedine Zidane","Ronaldinho","Erling Haaland","Michael Owen","Kylian Mbappe","Bobby Charlton","Mohamed Salah","Eric Cantona","Thierry Henry"],
    "Obscure": ["Johan Cruyff","Ronaldo Nazario","John Terry","Geoff Hurst","Gordon Banks","Stanley Matthews","Kevin Keegan","Kenny Dalglish","Ian Rush","Peter Shilton","Paul Scholes","Ryan Giggs","Roy Keane","Patrick Vieira","Dennis Bergkamp","Didier Drogba","Kevin De Bruyne","Luka Modric","Andres Iniesta","Xavi","Sergio Ramos","Tony Adams","Gary Neville","Luis Suarez","Jack Charlton","Zlatan Ibrahimovic","Gianluigi Buffon","Paolo Maldini","Jimmy Greaves","Roberto Baggio","Jamie Carragher","Francesco Totti","Andrea Pirlo","Roberto Carlos","Jordan Pickford","Rio Ferdinand","Ashley Cole","Franz Beckenbauer","David Seaman","Peter Crouch","Manuel Neuer","Gareth Bale","Ian Wright","Jude Bellingham","Bukayo Saka","Phil Foden","Raheem Sterling","Marcus Rashford","Jamie Vardy","Virgil van Dijk","Son Heung-min","Jack Grealish","Declan Rice","Trent Alexander-Arnold","Fernando Torres","Sergio Aguero","Paul Pogba","Eden Hazard","Karim Benzema","Robert Lewandowski","Vinicius Junior","Sadio Mane","Nobby Stiles","Fabio Cannavaro","Lothar Matthaus"],
    "Niche": ["Michel Platini","Ngolo Kante","Antoine Griezmann","Thomas Muller","Philipp Lahm","Eusebio","Ferenc Puskas","Garrincha","Gerd Muller"],
    "Extremely Esoteric": []
  },
  "British politicians": {
    "Common": ["Winston Churchill","Margaret Thatcher","Tony Blair","Boris Johnson","David Cameron","Theresa May","Gordon Brown","John Major","Nigel Farage","Jeremy Corbyn","Keir Starmer","Rishi Sunak","Liz Truss","Harold Wilson","Neville Chamberlain","Clement Attlee","Nicola Sturgeon","Sadiq Khan","Ken Livingstone","John Prescott","Jacob Rees-Mogg","Diane Abbott"],
    "Obscure": ["Benjamin Disraeli","William Gladstone","Robert Peel","Edward Heath","James Callaghan","Anthony Eden","Harold Macmillan","Alec Douglas-Home","Ed Miliband","David Miliband","Neil Kinnock","Michael Foot","Aneurin Bevan","Nick Clegg","Paddy Ashdown","Charles Kennedy","Vince Cable","Alex Salmond","Ian Paisley","Michael Heseltine","Geoffrey Howe","Nigel Lawson","Norman Tebbit","Denis Healey","Roy Jenkins","Enoch Powell","Tony Benn","Barbara Castle","Michael Gove","George Osborne","Philip Hammond","Sajid Javid","Jeremy Hunt","Priti Patel","Matt Hancock","Dominic Raab","Rachel Reeves","Angela Rayner","Peter Mandelson","Jack Straw","Robin Cook","Ken Clarke","William Hague","Iain Duncan Smith","Michael Howard","John Bercow","Caroline Lucas","Nancy Astor","Dennis Skinner","Edwina Currie","Ann Widdecombe","Nadine Dorries","Suella Braverman","Kemi Badenoch","Ed Davey","Jo Swinson","Tim Farron","Ruth Davidson","Duke of Wellington","Stanley Baldwin","Ramsay MacDonald","David Lloyd George","Herbert Asquith","Hugh Gaitskell"],
    "Niche": ["Robert Walpole","William Pitt the Elder","William Pitt the Younger","Lord Palmerston","Lord Salisbury","Lord Melbourne","Spencer Perceval","George Canning","Lord North","Arthur Balfour","Henry Campbell-Bannerman","Andrew Bonar Law","Lord Liverpool"],
    "Extremely Esoteric": []
  },
  "Chemical elements": {
    "Common": ["Hydrogen","Helium","Carbon","Nitrogen","Oxygen","Sodium","Iron","Copper","Zinc","Silver","Gold","Mercury","Lead","Tin","Uranium","Plutonium","Chlorine","Calcium","Aluminium","Silicon","Sulphur","Neon","Potassium","Magnesium","Nickel","Platinum","Titanium","Lithium","Phosphorus","Radium"],
    "Obscure": ["Fluorine","Argon","Cobalt","Arsenic","Iodine","Xenon","Krypton","Radon","Boron","Tungsten","Chromium","Manganese","Bromine","Cadmium","Polonium","Selenium","Zirconium","Barium","Bismuth","Thorium","Oganesson","Beryllium","Palladium","Antimony","Einsteinium"],
    "Niche": ["Scandium","Vanadium","Gallium","Germanium","Strontium","Molybdenum","Rhodium","Iridium","Osmium","Caesium","Cerium","Neodymium","Thallium","Tellurium","Indium","Americium","Curium","Californium","Fermium","Mendelevium","Nobelium","Technetium","Francium","Astatine","Neptunium","Livermorium","Tennessine","Rubidium","Hafnium"],
    "Extremely Esoteric": ["Lanthanum","Yttrium","Niobium","Ruthenium","Europium","Actinium","Tantalum","Rhenium"]
  },
  "Parts of the body": {
    "Common": ["Head","Face","Forehead","Eye","Eyebrow","Nose","Mouth","Lip","Tongue","Tooth","Chin","Cheek","Ear","Neck","Throat","Shoulder","Arm","Elbow","Wrist","Hand","Finger","Thumb","Chest","Back","Stomach","Hip","Knee","Ankle","Foot","Heel","Toe","Skin","Hair","Brain","Heart","Lung","Liver","Kidney"],
    "Obscure": ["Eyelash","Eyelid","Nostril","Gum","Jaw","Earlobe","Forearm","Palm","Knuckle","Fingernail","Breast","Rib","Spine","Waist","Tummy","Navel","Bottom","Groin","Thigh","Kneecap","Shin","Calf","Toenail","Sole","Scalp","Spleen","Pancreas","Bladder","Intestine","Colon","Appendix","Skull","Collarbone","Shoulder blade","Pelvis","Muscle","Tendon","Ligament","Artery","Vein","Nerve","Windpipe","Tonsil","Armpit","Temple","Hamstring","Bone","Pupil","Bicep","Tricep","Gallbladder","Femur","Vertebra","Sternum","Larynx","Diaphragm"],
    "Niche": ["Oesophagus","Tibia","Fibula","Humerus"],
    "Extremely Esoteric": ["Radius","Ulna"]
  },
  "Gemstones and minerals": {
    "Common": ["Diamond","Ruby","Sapphire","Emerald","Amethyst","Topaz","Opal","Pearl","Garnet","Turquoise","Jade","Quartz","Amber","Coral","Marble","Granite","Limestone","Flint","Slate","Sandstone","Graphite"],
    "Obscure": ["Aquamarine","Onyx","Agate","Jasper","Citrine","Moonstone","Obsidian","Pyrite","Talc","Mica","Peridot","Lapis lazuli","Malachite","Tigers eye","Rose quartz","Jet","Basalt","Pumice","Alabaster","Gypsum","Calcite","Tanzanite","Zircon","Cubic zirconia","Bloodstone","Carnelian","Tourmaline","Feldspar","Soapstone","Smoky quartz"],
    "Niche": ["Alexandrite","Beryl","Spinel","Sodalite","Hematite","Fluorite","Halite","Galena","Magnetite","Bauxite","Cinnabar","Azurite","Rhodonite","Kunzite","Morganite","Selenite","Serpentine","Chalcedony","Sunstone","Labradorite","Amazonite","Aventurine","Chrysoprase","Apatite","Dolomite","Corundum","Kyanite","Olivine","Quartzite","Iolite","Howlite","Zeolite","Hornblende","Cassiterite","Chalcopyrite","Rutile","Biotite","Kaolinite","Uraninite","Sphalerite"],
    "Extremely Esoteric": ["Ammolite","Larimar"]
  },
  "Programming languages and tech terms": {
    "Common": ["Python","Java","JavaScript","HTML","Linux","Cloud","Server","Database","Algorithm","Encryption","Firewall","Blockchain","Machine learning","Open source","Library","Scratch","Cache","API"],
    "Obscure": ["C","CSS","SQL","Git","GitHub","Docker","Variable","Function","Array","String","Object","Class","Boolean","Integer","Framework","Ruby","Swift","React","Bash","COBOL","Fortran","Pascal","Compiler","Debugger","PHP","Rust","Go","Unity","C Sharp","C Plus Plus","TypeScript","Kotlin","Perl","Visual Basic","Assembly","Angular","Vue","Kubernetes","Node.js","Recursion","JSON","XML","Frontend","Backend","Lisp","Delphi","PowerShell","Flutter","jQuery","Django","R","Dart","Scala","Lua","Objective C","MATLAB","Haskell"],
    "Niche": ["Clojure","Erlang","Elixir","F Sharp","Julia","Prolog","Ada","Smalltalk","Racket","OCaml","WebAssembly","Svelte","Laravel"],
    "Extremely Esoteric": []
  },
  "Tech companies": {
    "Common": ["Apple","Microsoft","Google","Amazon","Meta","Facebook","Tesla","Netflix","IBM","Intel","Samsung","Sony","Nokia","Nintendo","Sega","Twitter","Uber","Airbnb","Spotify","PayPal","eBay","Sky","Dell","HP","Yahoo","Dyson","Vodafone","BT","Zoom"],
    "Obscure": ["Siemens","Toshiba","Xerox","Sinclair","Motorola","BlackBerry","Virgin Media","EE","O2","LG","Philips","Panasonic","Canon","Nvidia","Oracle","Cisco","AMD","Huawei","Lenovo","Asus","Acer","Adobe","Salesforce","SAP","Alibaba","Snap","Pinterest","LinkedIn","Reddit","Slack","Dropbox","Shopify","OpenAI","Monzo","Atari","Activision","Epic Games","Ubisoft","Electronic Arts","Garmin","Fitbit","GoPro","Logitech","Sonos","Bose","Deliveroo","Ocado","Hitachi","Sharp","Xiaomi","Mozilla","Tencent","Valve","HTC"],
    "Niche": ["Qualcomm","Oppo","ByteDance","Stripe","Atlassian","Cloudflare","Anthropic","Broadcom","Texas Instruments","ARM"],
    "Extremely Esoteric": []
  },
  "Apps and websites": {
    "Common": ["Google","YouTube","Facebook","Instagram","WhatsApp","TikTok","Twitter","Snapchat","Netflix","Spotify","Amazon","eBay","Wikipedia","Gmail","Skype","Zoom","Uber","Airbnb","PayPal","Tinder","Google Maps","Minecraft","Fortnite","Candy Crush","BBC iPlayer","Disney Plus","Prime Video","Yahoo","Google Chrome","Firefox","Safari","Microsoft Teams","Google Translate","FaceTime","Messenger","BBC News","Rightmove","Roblox","Pokemon Go","Deliveroo","Just Eat","Uber Eats","Vinted","Gumtree","Etsy","Tripadvisor","Booking.com","Skyscanner","Wordle","Outlook","Pinterest","LinkedIn","Reddit"],
    "Obscure": ["Slack","Discord","Telegram","Signal","Twitch","Bumble","Duolingo","Shazam","Dropbox","Google Drive","Trello","Canva","Steam","All 4","Apple Music","SoundCloud","Tumblr","Bing","DuckDuckGo","Google Docs","Strava","MyFitnessPal","Monzo","Revolut","ITVX","BBC Sounds","Trainline","Citymapper","Autotrader","iMessage","GitHub","Stack Overflow","Zoopla","IMDb","Ocado","Threads"],
    "Niche": ["Notion","Quora","Medium","Imgur"],
    "Extremely Esoteric": []
  },
  "Units of measurement": {
    "Common": ["Metre","Kilometre","Centimetre","Millimetre","Mile","Yard","Foot","Inch","Gram","Kilogram","Milligram","Tonne","Ton","Pound","Ounce","Stone","Litre","Millilitre","Gallon","Pint","Cup","Teaspoon","Tablespoon","Second","Minute","Hour","Day","Week","Month","Year","Decade","Century","Fortnight","Watt","Volt","Calorie","Kilocalorie","Celsius","Fahrenheit","Degree","Byte","Kilobyte","Megabyte","Gigabyte","Terabyte","Bit","Acre","Hectare","Knot","Horsepower","Light year","Dozen","Kilowatt"],
    "Obscure": ["Nautical mile","Furlong","Fathom","Carat","Quart","Fluid ounce","Barrel","Millennium","Hertz","Gigahertz","Joule","Kilowatt hour","Newton","Ampere","Ohm","Kelvin","Pascal","Bar","Atmosphere","Psi","Radian","Lumen","Decibel","Mole","Mach","Parsec","Astronomical unit","Hand","Bushel"],
    "Niche": ["Farad","Henry","Tesla","Coulomb","Candela","Lux","Angstrom","Micron"],
    "Extremely Esoteric": ["Weber","Siemens","Becquerel","Sievert"]
  },
  "Maths and geometry terms": {
    "Common": ["Angle","Triangle","Square","Rectangle","Circle","Pentagon","Hexagon","Octagon","Cube","Sphere","Cone","Cylinder","Pyramid","Radius","Diameter","Circumference","Area","Volume","Perimeter","Parallel","Symmetry","Pi","Fraction","Decimal","Percentage","Ratio","Prime number","Factor","Multiple","Even number","Odd number","Square root","Equation","Algebra","Geometry","Calculus","Trigonometry","Statistics","Probability","Mean","Median","Mode","Range","Average","Sum","Product","Addition","Subtraction","Multiplication","Division","Graph","Infinity","Right angle","Acute angle","Obtuse angle"],
    "Obscure": ["Ellipse","Polygon","Parallelogram","Rhombus","Trapezium","Kite","Prism","Hypotenuse","Perpendicular","Vertex","Edge","Tangent","Chord","Arc","Sector","Sine","Cosine","Integer","Cube root","Exponent","Variable","Quotient","Remainder","Axis","Origin","Gradient","Coordinate","Function","Theorem","Proof","Sequence","Fibonacci","Matrix","Vector"],
    "Niche": ["Derivative","Integral","Logarithm"],
    "Extremely Esoteric": ["Segment"]
  },
  "Medical conditions": {
    "Common": ["Asthma","Diabetes","Cancer","Arthritis","Migraine","Epilepsy","Eczema","Acne","Stroke","Heart attack","Pneumonia","Influenza","Common cold","Measles","Mumps","Chickenpox","Malaria","Piles","Meningitis","Tonsillitis","Dementia","Alzheimers","Depression","Anxiety","Autism","ADHD","Dyslexia","Insomnia","Obesity","Hay fever","Covid","HIV","Ebola","Smallpox","Polio","Whooping cough","Shingles","Constipation","Diarrhoea","Heartburn","Food poisoning","Concussion","Warts","Head lice","Sunburn"],
    "Obscure": ["Psoriasis","Anaemia","Hypertension","Bronchitis","Rubella","Tuberculosis","Impetigo","Hepatitis","Jaundice","Appendicitis","Parkinsons","Multiple sclerosis","Schizophrenia","Osteoporosis","Gout","Tinnitus","Glaucoma","Cataracts","Conjunctivitis","Anaphylaxis","Lupus","Colitis","Cystitis","Thrush","Herpes","Cold sore","Verruca","Athletes foot","Ringworm","Scabies","Sciatica","Scoliosis","Hernia","Whiplash","Glandular fever","Vertigo","Sinusitis","Laryngitis","Sepsis","Leukaemia","Cystic fibrosis","Kidney stones"],
    "Niche": ["Crohns disease","Coeliac disease","Cirrhosis","Carpal tunnel","Tendonitis","Lymphoma","Emphysema"],
    "Extremely Esoteric": []
  },
  "Gadgets and electronics": {
    "Common": ["Smartphone","Laptop","Tablet","Smartwatch","Headphones","Earbuds","Speaker","Television","Camera","Games console","Keyboard","Mouse","Monitor","Printer","Router","Microphone","Remote control","Radio","Alarm clock","Calculator","iPad","iPhone","iPod","Walkman","Mobile phone","Torch","Hair dryer","Toaster","Kettle","Microwave","Washing machine","Dishwasher","Fridge","Freezer","Oven","Playstation","Xbox","Nintendo Switch","Game Boy","Drone","Hoover","Blender","Charger","Electric toothbrush","Electric shaver","Tumble dryer","Smoke alarm","Kindle","Air fryer","USB stick","Hard drive","Tamagotchi","Apple Watch"],
    "Obscure": ["Camcorder","Joystick","Scanner","Modem","Webcam","Power bank","E-reader","Fitness tracker","Sat nav","Smart speaker","VR headset","Projector","Soundbar","Record player","DVD player","Blu-ray player","Video recorder","Cassette player","MP3 player","Bluetooth speaker","Robot vacuum","Dehumidifier","Selfie stick","Action camera","Tripod","Memory card","SD card","Gamepad","Electric scooter","Hoverboard","Walkie talkie","Metal detector"],
    "Niche": ["Graphics card","Motherboard","Processor","Raspberry Pi"],
    "Extremely Esoteric": []
  },
  "Clothing": {
    "Common": ["Shirt","T-shirt","Blouse","Polo Shirt","Jumper","Cardigan","Hoodie","Sweatshirt","Jacket","Coat","Raincoat","Overcoat","Trench Coat","Parka","Anorak","Blazer","Waistcoat","Vest","Jeans","Trousers","Pants","Shorts","Leggings","Tights","Joggers","Tracksuit","Chinos","Skirt","Miniskirt","Dress","Gown","Jumpsuit","Dungarees","Boiler Suit","Suit","Dinner Jacket","Kilt","Poncho","Cape","Scarf","Gloves","Mittens","Hat","Cap","Bobble Hat","Beret","Bowler Hat","Top Hat","Tie","Bow Tie","Belt","Braces","Socks","Stockings","Underwear","Boxers","Briefs","Bra","Knickers","Pyjamas","Nightie","Dressing Gown","Flat Cap","Swimsuit","Bikini","Swimming Trunks","Wetsuit","Leotard","Tutu","Apron","Uniform","Lab Coat","Fleece","Puffer Jacket","Bomber Jacket","Leather Jacket","Denim Jacket","Onesie","Balaclava"],
    "Obscure": ["Playsuit","Sari","Kimono","Cloak","Mac","Bandana","Thong","Gilet","Tunic","Duffle Coat","Cagoule","Bodysuit","Crop Top"],
    "Niche": ["Camisole","Kaftan","Sarong","Shawl"],
    "Extremely Esoteric": []
  },
  "Footwear": {
    "Common": ["Boots","Shoes","Trainers","Studs","Sandals","Flip Flops","Slippers","High Heels","Stilettos","Pumps","Loafers","Wellies","Ankle Boots","Cowboy Boots","Hiking Boots","Ugg Boots","Football Boots","Rugby Boots","Running Shoes","Plimsolls","Gym Shoes","Tennis Shoes","Golf Shoes","School Shoes","Flats","Converse","Crocs","Dr Martens","Ice Skates","Roller Skates","Ski Boots","Slip-ons","Sliders"],
    "Obscure": ["Brogues","Oxfords","Moccasins","Espadrilles","Clogs","Chelsea Boots","Desert Boots","Ballet Shoes","Ballet Flats","Court Shoes","Platform Shoes","Wedges","Kitten Heels","Mules","Slides","Deck Shoes","Boat Shoes","Canvas Shoes","Birkenstocks","Galoshes","Waders","Thigh High Boots","Knee High Boots","Go-go Boots","Tap Shoes","Mary Janes","Gladiator Sandals","Spikes","Jackboots","Steel Toe Caps","Pointe Shoes","Hunter Wellies","Casual Shoes","Riding Shoes","Snowshoes","Bovver Boots","Creepers","Hi-tops","Lace Ups"],
    "Niche": ["Winklepickers","Slingbacks","Derby Shoes","Hobnail Boots"],
    "Extremely Esoteric": ["Ghillie Shoes","Monk Shoes","Peep Toes"]
  },
  "Furniture": {
    "Common": ["Chair","Armchair","Sofa","Couch","Settee","Corner Sofa","Recliner","Stool","Bar Stool","Bench","Footstool","Beanbag","Table","Dining Table","Coffee Table","Side Table","Desk","Dressing Table","Bedside Table","Bed","Double Bed","Single Bed","Bunk Bed","Cot","Futon","Sofa Bed","Headboard","Mattress","Wardrobe","Chest of Drawers","Bookcase","Bookshelf","Shelf","Cabinet","Cupboard","Sideboard","Hat Stand","Coat Rack","Shoe Rack","Wine Rack","Mirror","Rocking Chair","High Chair","Deckchair","Folding Chair","Office Chair","Swivel Chair","Desk Chair","Dining Chair","Sun Lounger","Hammock","Garden Bench","Picnic Table","Kitchen Island"],
    "Obscure": ["Ottoman","Pouffe","Writing Desk","Three Piece Suite","Cot Bed","Daybed","Four Poster Bed","Chest","Trunk","Blanket Box","Filing Cabinet","Welsh Dresser","Display Cabinet","TV Stand","Umbrella Stand","Hall Stand","Screen","Room Divider","Wingback Chair","Chaise Longue","Chesterfield","Breakfast Bar","Tea Trolley","Nest of Tables","Card Table","Lectern"],
    "Niche": ["Tallboy","Bureau","Pedestal Table","Cheval Mirror"],
    "Extremely Esoteric": ["Gateleg Table"]
  },
  "Kitchen utensils and appliances": {
    "Common": ["Knife","Fork","Spoon","Teaspoon","Tablespoon","Ladle","Spatula","Whisk","Tongs","Peeler","Grater","Masher","Potato Masher","Rolling Pin","Colander","Sieve","Oven Glove","Tin Opener","Bottle Opener","Corkscrew","Garlic Press","Pizza Cutter","Egg Timer","Measuring Jug","Tea Cosy","Mixing Bowl","Chopping Board","Tea Towel","Bread Knife","Carving Knife","Scissors","Kitchen Scales","Funnel","Skewer","Nutcracker","Ice Cream Scoop","Wooden Spoon","Cake Tin","Baking Tray","Roasting Tin","Frying Pan","Saucepan","Wok","Casserole Dish","Pressure Cooker","Slow Cooker","Kettle","Toaster","Microwave","Oven","Hob","Grill","Fridge","Freezer","Dishwasher","Blender","Food Processor","Coffee Maker","Air Fryer","Kitchen Timer","Teapot","Cafetiere"],
    "Obscure": ["Cheese Slicer","Egg Slicer","Pastry Brush","Paring Knife","Zester","Salad Spinner","Tea Strainer","Apple Corer","Pestle and Mortar","Slotted Spoon","Fish Slice","Palette Knife","Stockpot","Griddle Pan","Stand Mixer","Juicer","Espresso Machine","Coffee Grinder","Deep Fat Fryer","Rice Cooker","Bread Maker","Waffle Maker","Sandwich Toaster","Soup Maker","Meat Thermometer","Ice Cream Maker","Toastie Maker"],
    "Niche": ["Mandoline","Baster"],
    "Extremely Esoteric": []
  },
  "Tools": {
    "Common": ["Hammer","Screwdriver","Spanner","Pliers","Saw","Hacksaw","Handsaw","Jigsaw","Drill","Power Drill","Mallet","Chisel","Sledgehammer","Crowbar","Pickaxe","Axe","Shovel","Spade","Garden Fork","Rake","Hoe","Trowel","Shears","Lawnmower","Wheelbarrow","Ladder","Stepladder","Tape Measure","Spirit Level","Vice","Allen Key","Stanley Knife","Paintbrush","Paint Roller","Sandpaper","Sander","Chainsaw","Glue Gun","Blowtorch","Jack","Claw Hammer","Toolbox","Workbench","Hedge Trimmer","Strimmer","Leaf Blower","Scythe","Sickle","Pitchfork"],
    "Obscure": ["Mole Grips","Plane","File","Rasp","Hatchet","Secateurs","Set Square","Clamp","G Clamp","Socket Set","Ratchet","Adjustable Spanner","Stillsons","Tenon Saw","Wire Cutters","Wire Strippers","Bolt Cutters","Tin Snips","Filling Knife","Angle Grinder","Circular Saw","Nail Gun","Staple Gun","Soldering Iron","Heat Gun","Mitre Saw","Torque Wrench","Bradawl","Plumb Line","Stud Finder","Tool Belt","Loppers","Pruning Saw"],
    "Niche": ["Band Saw","Coping Saw","Brace and Bit","Multimeter","Lump Hammer","Ball Peen Hammer"],
    "Extremely Esoteric": ["Awl","Centre Punch"]
  },
  "Jobs and professions": {
    "Common": ["Doctor","Nurse","Teacher","Lawyer","Solicitor","Judge","Police Officer","Firefighter","Dentist","Vet","Surgeon","Engineer","Architect","Builder","Plumber","Electrician","Carpenter","Painter","Bricklayer","Mechanic","Farmer","Gardener","Butcher","Baker","Chef","Waiter","Cleaner","Binman","Driver","Taxi Driver","Bus Driver","Lorry Driver","Pilot","Sailor","Soldier","Scientist","Accountant","Secretary","Receptionist","GP","Journalist","Editor","Author","Photographer","Actor","Actress","Musician","Singer","Dancer","Artist","Hairdresser","Barber","Fisherman","Politician","Comedian","Referee","Footballer","Professor","Shop Assistant","Postie","Midwife","Paramedic","Pharmacist","Vicar","Priest","Librarian"],
    "Obscure": ["Barrister","Psychologist","Therapist","Joiner","Plasterer","Decorator","Roofer","Welder","Barista","Dinner Lady","Checkout Operator","Clerk","Estate Agent","Lollipop Lady","Beautician","Optician","Chemist","Lecturer","Economist","Mathematician","Banker","Personal Trainer","Software Developer","Flight Attendant","Lifeguard","Miner","Tailor"],
    "Niche": [],
    "Extremely Esoteric": []
  },
  "Hobbies and pastimes": {
    "Common": ["Reading","Writing","Drawing","Painting","Photography","Knitting","Sewing","Cooking","Baking","Gardening","Fishing","Hiking","Camping","Cycling","Running","Swimming","Yoga","Pilates","Dancing","Singing","Playing Guitar","Playing Piano","Chess","Poker","Crosswords","Sudoku","Jigsaw Puzzles","Board Games","Video Games","Birdwatching","Pottery","Surfing","Skiing","Snowboarding","Skateboarding","Rock Climbing","Sailing","Kayaking","Golf","Tennis","Darts","Snooker","Pool","Bowling","Ice Skating","Roller Skating","Horse Riding","Archery","Boxing","Martial Arts","Karate","Judo","Gymnastics","Football","Rugby","Cricket","Badminton","Table Tennis","Astronomy","Karaoke","Bingo","Meditation","Pub Quiz","Diy"],
    "Obscure": ["Crochet","Embroidery","Draughts","Bridge","Stamp Collecting","Coin Collecting","Model Making","Model Trains","Woodworking","Calligraphy","Origami","Scrapbooking","Fencing","Bowls","Rambling","Trainspotting","Car Maintenance","Wine Tasting","Magic Tricks","Car Boot Sales","Genealogy","Metal Detecting","Home Brewing"],
    "Niche": ["Beekeeping","Morris Dancing","Geocaching","Bell Ringing"],
    "Extremely Esoteric": []
  },
  "School subjects and academic fields": {
    "Common": ["Mathematics","English","English Literature","English Language","Physics","Chemistry","Biology","History","Geography","Art","Music","Drama","Physical Education","Religious Education","French","German","Spanish","Science","Maths","PE","Computing","Latin"],
    "Obscure": ["Citizenship","ICT","Design and Technology","Food Technology","Textiles","Woodwork","Greek","Italian","Statistics","Geometry","Algebra","Calculus","Trigonometry","Economics","Business Studies","Accounting","Politics","Sociology","Psychology","Philosophy","Law","Dance","Home Economics","Religious Studies","PSHE","Media Studies","Computer Science","Mandarin","Japanese","Russian","Astronomy","Geology","Engineering","Medicine","Architecture","Education"],
    "Niche": ["Anthropology","Archaeology","Zoology","Botany","Ecology","Linguistics","Theology","Classics","Ethics","Environmental Science","Genetics","Anatomy","Physiology","Agriculture","Pharmacy"],
    "Extremely Esoteric": ["Biochemistry","Neuroscience","Microbiology"]
  },
  "Vehicles and transport": {
    "Common": ["Car","Bus","Coach","Lorry","Van","Taxi","Motorbike","Motorcycle","Scooter","Bicycle","Tram","Train","Tube","Underground","Tractor","Bulldozer","Crane","Ambulance","Fire Engine","Police Car","Helicopter","Aeroplane","Double Decker","Jet","Boat","Ship","Yacht","Canoe","Submarine","Rocket","Tank","Caravan","Campervan","Skateboard","Ferry","Hot Air Balloon","Space Shuttle","Trailer"],
    "Obscure": ["Juggernaut","Moped","Tricycle","Unicycle","Metro","Digger","Excavator","Forklift","Cement Mixer","Steamroller","Hearse","Limousine","Jeep","Minibus","Carriage","Stagecoach","Rickshaw","Tuk Tuk","Sleigh","Glider","Hang Glider","Spaceship","Drone","Kayak","Hovercraft","Cable Car","Sports Car","Convertible","Hatchback","Black Cab","Milk Float","Snowplough","Pushchair","Jet Ski","Penny Farthing","Tandem","Gondola"],
    "Niche": ["Monorail","Dumper Truck","Segway","Dune Buggy"],
    "Extremely Esoteric": ["Funicular"]
  },
  "Boys names": {
    "Common": ["James","John","Robert","Michael","William","David","Richard","Joseph","Thomas","Charles","Christopher","Daniel","Matthew","Anthony","Mark","Steven","Paul","Andrew","Joshua","Kevin","Brian","George","Edward","Jason","Jacob","Gary","Nicholas","Jonathan","Stephen","Scott","Benjamin","Samuel","Frank","Alexander","Patrick","Jack","Henry","Adam","Peter","Ian","Ryan","Oliver","Harry","Liam","Oscar","Charlie","Luke","Max","Leo","Noah","Ethan","Dylan","Connor"],
    "Obscure": ["Darren","Craig","Lee","Barry","Trevor","Stuart","Colin","Nigel","Aaron","Nathan","Neil","Keith","Terry","Sean","Arthur","Graham","Joe","Dominic","Albert","Gabriel","Alan","Callum","Wayne","Freddie","Alfie","Archie"],
    "Niche": ["Kieran"],
    "Extremely Esoteric": []
  },
  "Girls names": {
    "Common": ["Mary","Patricia","Jennifer","Linda","Elizabeth","Barbara","Susan","Jessica","Sarah","Karen","Lisa","Margaret","Sandra","Emily","Donna","Michelle","Carol","Amanda","Stephanie","Rebecca","Sharon","Laura","Amy","Angela","Anna","Emma","Nicole","Helen","Samantha","Katherine","Christine","Joanne","Rachel","Catherine","Maria","Diane","Olivia","Julie","Victoria","Lily","Lauren","Kelly","Hannah","Megan","Sophie","Jean","Alice","Julia","Grace","Danielle","Charlotte","Natalie","Diana","Gemma","Chloe","Lucy","Ella","Amelia"],
    "Obscure": ["Beryl","Doris","Dorothy","Deborah","Tracey","Kathleen","Shirley","Brenda","Pamela","Janet","Heather","Christina","Joan","Judith","Jacqueline","Ivy","Gloria","Ann","Judy","Amber","Marilyn","Kayleigh"],
    "Niche": [],
    "Extremely Esoteric": []
  },
  "Greek and Roman gods and heroes": {
    "Common": ["Zeus","Hera","Poseidon","Athena","Apollo","Artemis","Ares","Aphrodite","Hermes","Hades","Hercules","Perseus","Achilles","Cupid","Venus","Mars","Jupiter","Neptune","Mercury","Pluto","Midas","Helen of Troy","Pandora","Icarus","Atlas","Saturn","Diana","Juno"],
    "Obscure": ["Demeter","Hephaestus","Dionysus","Persephone","Eros","Pan","Nike","Prometheus","Theseus","Odysseus","Jason","Orpheus","Ajax","Hector","Paris","Agamemnon","Oedipus","Medea","Penelope","Narcissus","Daedalus","Sisyphus","Romulus","Remus","Minerva","Vulcan","Bacchus","Vesta","Ceres","Aeneas","Janus","Aurora","Luna","Flora","Uranus","Gaia","Hestia","Morpheus","Nemesis","Iris","Helios","Selene","Hecate"],
    "Niche": ["Cronus","Rhea","Atalanta","Fortuna","Castor","Ganymede"],
    "Extremely Esoteric": ["Hypnos"]
  },
  "Mythical creatures and monsters": {
    "Common": ["Dragon","Unicorn","Phoenix","Mermaid","Werewolf","Vampire","Zombie","Ghost","Goblin","Troll","Elf","Dwarf","Fairy","Giant","Yeti","Loch Ness Monster","Witch","Wizard","Genie","Dracula","Frankenstein","Pegasus","Centaur","Minotaur","Medusa","Cyclops","Leprechaun","Mummy","Bigfoot","Nessie","Grim Reaper","Ogre","Gnome","Pixie"],
    "Obscure": ["Griffin","Hydra","Cerberus","Siren","Harpy","Sphinx","Chimera","Kraken","Basilisk","Banshee","Bogeyman","Gargoyle","Golem","Imp","Demon","Satyr","Nymph","Wyvern","Leviathan","Jabberwock","Wraith","Ghoul","Poltergeist","Gorgon","Valkyrie","Sprite","Hellhound","Puck","Succubus","Dryad","Will o the Wisp","Selkie","Kelpie"],
    "Niche": ["Hippogriff","Manticore","Cockatrice","Scylla","Black Shuck","Lambton Worm","Kitsune","Kappa","Oni"],
    "Extremely Esoteric": ["Barghest","Jenny Greenteeth","Redcap","Typhon"]
  },
  "Fashion brands": {
    "Common": ["Gucci","Prada","Chanel","Dior","Versace","Armani","Burberry","Louis Vuitton","Ralph Lauren","Calvin Klein","Tommy Hilfiger","Levis","Nike","Adidas","Puma","Reebok","Zara","H and M","Gap","Topshop","Primark","Next","River Island","Converse","Vans","North Face","Rolex","Ray-Ban","Marks and Spencer","Dr Martens","New Look","Cartier","Lacoste","Fred Perry","Hugo Boss","Superdry","Boohoo","ASOS","Hermes"],
    "Obscure": ["Fendi","Balenciaga","Givenchy","Valentino","Dolce and Gabbana","Under Armour","Uniqlo","Mango","Ted Baker","Paul Smith","Vivienne Westwood","Alexander McQueen","Stella McCartney","Jimmy Choo","Manolo Blahnik","Christian Louboutin","Yves Saint Laurent","Celine","Diesel","Michael Kors","Matalan","Timberland","New Balance","Asics","Lululemon","Gymshark","Pretty Little Thing","Monsoon","Karen Millen","Barbour","Hollister","Victorias Secret","Ann Summers","Canada Goose","Jack Wills","Boden"],
    "Niche": ["Moschino","Moncler","Stone Island"],
    "Extremely Esoteric": []
  },
  "UK shops and supermarkets": {
    "Common": ["Tesco","Sainsburys","Asda","Morrisons","Aldi","Lidl","Waitrose","Co-op","Marks and Spencer","Iceland","Boots","Superdrug","Argos","Currys","John Lewis","Debenhams","Harrods","Wilko","B and Q","IKEA","Primark","Topshop","Next","Greggs","Costa","Starbucks","Woolworths","Specsavers","WHSmith","Waterstones","Sports Direct","JD Sports","Poundland","Home Bargains","Halfords","HMV","Pret a Manger","TK Maxx","New Look","Lush","Ocado","Pets at Home","BHS","Screwfix"],
    "Obscure": ["Spar","Selfridges","Wickes","Homebase","Dunelm","Matalan","PC World","Carphone Warehouse","Timpson","Holland and Barrett","The Body Shop","Clarks","Card Factory","B and M","The Range","House of Fraser","Harvey Nichols","Fortnum and Mason","Foyles","Mothercare","Hotel Chocolat","Thorntons","Dorothy Perkins","Miss Selfridge","Schuh","Decathlon","Smyths","The Entertainer","Mountain Warehouse","Fat Face","Lakeland"],
    "Niche": ["Londis","Farmfoods","Dobbies"],
    "Extremely Esoteric": []
  },
  "Holidays and festivals": {
    "Common": ["Christmas","Christmas Eve","Boxing Day","New Years Eve","New Years Day","Easter","Good Friday","Easter Monday","Halloween","Bonfire Night","Guy Fawkes Night","Valentines Day","Mothers Day","Fathers Day","Pancake Day","Shrove Tuesday","Christmas Day","Easter Sunday","Bank Holiday","Glastonbury","Diwali","Ramadan","Chinese New Year","Eid","St Patricks Day","Hogmanay","Burns Night","May Day","April Fools Day","Black Friday","Remembrance Day","Carnival","Pride","Mardi Gras","Oktoberfest","Jubilee","Hanukkah","St Georges Day","Lent"],
    "Obscure": ["Ash Wednesday","Mothering Sunday","Palm Sunday","Advent","Epiphany","Twelfth Night","Whitsun","Pentecost","Armistice Day","Passover","Yom Kippur","Rosh Hashanah","Holi","Eid al-Fitr","Eid al-Adha","Day of the Dead","Trooping the Colour","Notting Hill Carnival","Edinburgh Festival","Edinburgh Fringe","Reading Festival","Isle of Wight Festival","Creamfields","Winter Solstice","Summer Solstice","Midsummer","Harvest Festival","St Andrews Day","St Davids Day","Summer Bank Holiday","Spring Bank Holiday","Yule","Maundy Thursday","Ascension Day","Michaelmas"],
    "Niche": ["Songkran","Up Helly Aa","Beltane","Samhain","Vaisakhi"],
    "Extremely Esoteric": ["Shavuot"]
  },
  "Card and casino games": {
    "Common": ["Poker","Blackjack","Roulette","Bridge","Whist","Rummy","Solitaire","Patience","Snap","Old Maid","Happy Families","Uno","Bingo","Pontoon","Texas Holdem","Cheat","Beggar My Neighbour","Strip Poker","Fruit Machine","Lotto","Slots","Scratch Cards","One Armed Bandit","Shithead","Spoons","War"],
    "Obscure": ["Baccarat","Craps","Crazy Eights","Hearts","Spades","Cribbage","Gin Rummy","Canasta","Twenty-One","Brag","Three Card Brag","Pig","Speed","Spit","Keno","Video Poker","Klondike","Spider","FreeCell","Golf","Rummikub","Liars Dice","Poker Dice","Omaha","Oh Hell","Nap","Racing Demon","Slapjack","Black Maria","Knockout Whist","Contract Bridge","Gin","President","Seven Card Stud","Five Card Draw","Three Card Poker","Chemin de Fer","Pelmanism","Clock Patience"],
    "Niche": ["Faro","Pai Gow","Piquet","Bezique","Napoleon","Kalooki","Chinese Poker","Kings Cup","Donkey"],
    "Extremely Esoteric": ["Cassino","Razz"]
  },
  "Famous historical figures": {
    "Common": ["Napoleon","Cleopatra","Winston Churchill","Julius Caesar","Alexander the Great","Abraham Lincoln","George Washington","Queen Victoria","Henry VIII","Elizabeth I","Joan of Arc","Leonardo da Vinci","Michelangelo","Isaac Newton","Albert Einstein","Charles Darwin","Jesus","Hitler","Stalin","Shakespeare","Mozart","Beethoven","Genghis Khan","Margaret Thatcher","Martin Luther King","Nelson Mandela","Mahatma Gandhi","Florence Nightingale","Marie Curie","Christopher Columbus","Guy Fawkes","Robin Hood","Neil Armstrong","Anne Boleyn","King Arthur","Charles Dickens","Captain Cook","Thomas Edison","Wright Brothers","Amelia Earhart","Nelson","John F Kennedy","Socrates","Karl Marx","Sigmund Freud","Marie Antoinette","Moses"],
    "Obscure": ["Rosa Parks","Wellington","Francis Drake","Walter Raleigh","Alan Turing","Isambard Kingdom Brunel","Galileo","Aristotle","Plato","Buddha","Muhammad","Marco Polo","Nero","William the Conqueror","Richard the Lionheart","Alfred the Great","Oliver Cromwell","Alexander Graham Bell","Nikola Tesla","Emmeline Pankhurst","Catherine the Great","Tutankhamun","Mary Queen of Scots","William Wallace","Robert the Bruce","Boudicca","Pythagoras","Archimedes","Martin Luther"],
    "Niche": ["Saladin","Kublai Khan","Lady Jane Grey"],
    "Extremely Esoteric": ["Harold Godwinson"]
  }
};
