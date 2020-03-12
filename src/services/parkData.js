const parks = [
  {
    Name: "Acadia",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Bass_Harbor_Head_Light_Station_2016.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bass_Harbor_Head_Light_Station_2016.jpg/200px-Bass_Harbor_Head_Light_Station_2016.jpg",
    Location: "Maine",
    Established: "February 26, 1919",
    Area: "49,075.26 acres (198.6 km2)",
    "Recreation visitors": "3,537,575",
    Description:
      "Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats."
  },
  {
    Name: "American Samoa",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Ofu_Beach_NPS.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ofu_Beach_NPS.jpg/200px-Ofu_Beach_NPS.jpg",
    Location: "American Samoa",
    Established: "October 31, 1988",
    Area: "8,256.67 acres (33.4 km2)",
    "Recreation visitors": "28,626",
    Description:
      "The southernmost national park is on three Samoan islands and protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish."
  },
  {
    Name: "Arches",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Delicatearch1.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Delicatearch1.jpg/200px-Delicatearch1.jpg",
    Location: "Utah",
    Established: "November 12, 1971",
    Area: "76,678.98 acres (310.3 km2)",
    "Recreation visitors": "1,663,557",
    Description:
      "This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures located in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks."
  },
  {
    Name: "Badlands",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/BadlandsView3.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BadlandsView3.jpg/200px-BadlandsView3.jpg",
    Location: "South Dakota",
    Established: "November 10, 1978",
    Area: "242,755.94 acres (982.4 km2)",
    "Recreation visitors": "1,008,942",
    Description:
      "The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies. The White River Badlands contain the largest assemblage of known late Eocene and Oligocene mammal fossils. The wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs."
  },
  {
    Name: "Big Bend",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Big_Bend_National_Park_PB112573.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Big_Bend_National_Park_PB112573.jpg/200px-Big_Bend_National_Park_PB112573.jpg",
    Location: "Texas",
    Established: "June 12, 1944",
    Area: "801,163.21 acres (3,242.2 km2)",
    "Recreation visitors": "440,091",
    Description:
      "Named for the prominent bend in the Rio Grande along the U.S.–Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders. (BR)"
  },
  {
    Name: "Biscayne",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Biscayne_NP_snorkeling.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Biscayne_NP_snorkeling.jpg/200px-Biscayne_NP_snorkeling.jpg",
    Location: "Florida",
    Established: "June 28, 1980",
    Area: "172,971.11 acres (700.0 km2)",
    "Recreation visitors": "469,253",
    Description:
      "Located in Biscayne Bay, this park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and peregrine falcon."
  },
  {
    Name: "Black Canyon of the Gunnison",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Black_canyon_gunnison_Colorado.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_canyon_gunnison_Colorado.jpg/200px-Black_canyon_gunnison_Colorado.jpg",
    Location: "Colorado",
    Established: "October 21, 1999",
    Area: "30,779.83 acres (124.6 km2)",
    "Recreation visitors": "308,962",
    Description:
      "The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist which appears black when in shadow."
  },
  {
    Name: "Bryce Canyon",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Bryce_Canyon_Hoodoos_Amphitheater.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bryce_Canyon_Hoodoos_Amphitheater.jpg/200px-Bryce_Canyon_Hoodoos_Amphitheater.jpg",
    Location: "Utah",
    Established: "February 25, 1928",
    Area: "35,835.08 acres (145.0 km2)",
    "Recreation visitors": "2,679,478",
    Description:
      "Bryce Canyon is a geological amphitheater on the Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers."
  },
  {
    Name: "Canyonlands",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg/200px-Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg",
    Location: "Utah",
    Established: "September 12, 1964",
    Area: "337,597.83 acres (1,366.2 km2)",
    "Recreation visitors": "739,449",
    Description:
      "This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park also contains rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples."
  },
  {
    Name: "Capitol Reef",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG/200px-Cassidy_Arch%2C_Capitol_Reef_National_Park.JPG",
    Location: "Utah",
    Established: "December 18, 1971",
    Area: "241,904.50 acres (979.0 km2)",
    "Recreation visitors": "1,227,627",
    Description:
      "The park's Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth's diverse geologic layers. Other natural features include monoliths, cliffs, and sandstone domes shaped like the United States Capitol."
  },
  {
    Name: "Carlsbad Caverns",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Carlsbad_Interior_Formations.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Carlsbad_Interior_Formations.jpg/200px-Carlsbad_Interior_Formations.jpg",
    Location: "New Mexico",
    Established: "May 14, 1930",
    Area: "46,766.45 acres (189.3 km2)",
    "Recreation visitors": "465,912",
    Description:
      "Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs. (WHS)"
  },
  {
    Name: "Channel Islands",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Channel_Islands_National_Park.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Channel_Islands_National_Park.jpg/200px-Channel_Islands_National_Park.jpg",
    Location: "California",
    Established: "March 5, 1980",
    Area: "249,561.00 acres (1,009.9 km2)",
    "Recreation visitors": "366,250",
    Description:
      "Five of the eight Channel Islands are protected, and half of the park's area is underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, and 145 are unique to them, including the island fox. Ferry services offer transportation to the islands from the mainland. (BR)"
  },
  {
    Name: "Congaree",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bald_cypress_and_creek_%287166139814%29.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Bald_cypress_and_creek_%287166139814%29.jpg/200px-Bald_cypress_and_creek_%287166139814%29.jpg",
    Location: "South Carolina",
    Established: "November 10, 2003",
    Area: "26,639.99 acres (107.8 km2)",
    "Recreation visitors": "145,929",
    Description:
      "On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp. (BR)"
  },
  {
    Name: "Crater Lake",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Crater_lake_oregon.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Crater_lake_oregon.jpg/200px-Crater_lake_oregon.jpg",
    Location: "Oregon",
    Established: "May 22, 1902",
    Area: "183,224.05 acres (741.5 km2)",
    "Recreation visitors": "720,659",
    Description:
      "Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. The lake is the deepest in the United States and is noted for its vivid blue color and water clarity. Wizard Island and the Phantom Ship are more recent volcanic formations within the caldera. As the lake has no inlets or outlets, the lake is replenished only by precipitation."
  },
  {
    Name: "Cuyahoga Valley",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Cuyahoga_Valley_National_Park_03.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Cuyahoga_Valley_National_Park_03.jpg/200px-Cuyahoga_Valley_National_Park_03.jpg",
    Location: "Ohio",
    Established: "October 11, 2000",
    Area: "32,571.88 acres (131.8 km2)",
    "Recreation visitors": "2,096,053",
    Description:
      "This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures, and also offers a scenic train ride."
  },
  {
    Name: "Death Valley",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Mesquite_Sand_Dunes_in_Death_Valley.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mesquite_Sand_Dunes_in_Death_Valley.jpg/200px-Mesquite_Sand_Dunes_in_Death_Valley.jpg",
    Location: "California, Nevada",
    Established: "October 31, 1994",
    Area: "3,372,981.42 acres (13,650.0 km2)",
    "Recreation visitors": "1,678,660",
    Description:
      "Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats located at the lowest elevation in North America, −282 ft (−86 m). The park also protects canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1000 species of plants which grow in this geologic graben. (BR)"
  },
  {
    Name: "Denali",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg/200px-Mount_McKinley_and_Denali_National_Park_Road_2048px.jpg",
    Location: "Alaska",
    Established: "February 26, 1917",
    Area: "4,740,911.16 acres (19,185.8 km2)",
    "Recreation visitors": "594,660",
    Description:
      "Centered on Denali, the tallest mountain in North America, Denali is serviced by a single road leading to Wonder Lake. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, Porcupine caribou, and wolves. (BR)"
  },
  {
    Name: "Dry Tortugas",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Fort-Jefferson_Dry-Tortugas.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fort-Jefferson_Dry-Tortugas.jpg/200px-Fort-Jefferson_Dry-Tortugas.jpg",
    Location: "Florida",
    Established: "October 26, 1992",
    Area: "64,701.22 acres (261.8 km2)",
    "Recreation visitors": "56,810",
    Description:
      "The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. The park is home to undisturbed coral reefs and shipwrecks, and is only accessible by plane or boat. (BR)"
  },
  {
    Name: "Everglades",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Everglades_National_Park_cypress.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Everglades_National_Park_cypress.jpg/200px-Everglades_National_Park_cypress.jpg",
    Location: "Florida",
    Established: "May 30, 1934",
    Area: "1,508,938.57 acres (6,106.5 km2)",
    "Recreation visitors": "597,124",
    Description:
      "The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology. (WHS) (BR)"
  },
  {
    Name: "Gates of the Arctic",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e4/GatesofArctic.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/GatesofArctic.jpg/200px-GatesofArctic.jpg",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "7,523,897.45 acres (30,448.1 km2)",
    "Recreation visitors": "9,591",
    Description:
      "The country's northernmost park protects an expanse of pure wilderness in Alaska's Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years."
  },
  {
    Name: "Gateway Arch",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/St_Louis_night_expblend.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/St_Louis_night_expblend.jpg/200px-St_Louis_night_expblend.jpg",
    Location: "Missouri",
    Established: "February 22, 2018",
    Area: "192.83 acres (0.8 km2)",
    "Recreation visitors": "2,016,180",
    Description:
      "The Gateway Arch is a 630-foot (192 m) (both high and wide) catenary arch built to commemorate the Lewis and Clark Expedition, initiated by Thomas Jefferson, and the subsequent westward expansion of the country. The nearby Old Courthouse, across a greenway to the west of the arch, was the first site of the Dred Scott case about slavery. A museum, located in the underground visitor center below the arch, describes the arch's construction and the country's westward expansion."
  },
  {
    Name: "Glacier",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/St_Mary_Lake_-_Wild_goose_Island.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/St_Mary_Lake_-_Wild_goose_Island.jpg/200px-St_Mary_Lake_-_Wild_goose_Island.jpg",
    Location: "Montana",
    Established: "May 11, 1910",
    Area: "1,013,125.99 acres (4,100.0 km2)",
    "Recreation visitors": "2,965,309",
    Description:
      "The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 glaciers and 130 named lakes surrounded by Rocky Mountain peaks. There are historic hotels and a landmark road called the Going-to-the-Sun Road in this region of rapidly receding glaciers. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs. (WHS) (BR)"
  },
  {
    Name: "Glacier Bay",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/GlacierBay3.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/GlacierBay3.jpg/200px-GlacierBay3.jpg",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "3,223,383.43 acres (13,044.6 km2)",
    "Recreation visitors": "597,915",
    Description:
      "Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km). (WHS) (BR)"
  },
  {
    Name: "Grand Canyon",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg/200px-USA_09847_Grand_Canyon_Luca_Galuzzi_2007.jpg",
    Location: "Arizona",
    Established: "February 26, 1919",
    Area: "1,201,647.03 acres (4,862.9 km2)",
    "Recreation visitors": "6,380,495",
    Description:
      "The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have exposed the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from both the north and south rims, or from a number of trails that descend into the canyon itself. (WHS)"
  },
  {
    Name: "Grand Teton",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/Teton_Range_from_Glacier_View_Turnout-closeup.JPG",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Teton_Range_from_Glacier_View_Turnout-closeup.JPG/200px-Teton_Range_from_Glacier_View_Turnout-closeup.JPG",
    Location: "Wyoming",
    Established: "February 26, 1929",
    Area: "310,044.36 acres (1,254.7 km2)",
    "Recreation visitors": "3,491,151",
    Description:
      "Grand Teton is the tallest mountain in the Teton Range. The park's historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley. (BR)"
  },
  {
    Name: "Great Basin",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Prometheus_Wheeler.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Prometheus_Wheeler.jpg/200px-Prometheus_Wheeler.jpg",
    Location: "Nevada",
    Established: "October 27, 1986",
    Area: "77,180.00 acres (312.3 km2)",
    "Recreation visitors": "153,094",
    Description:
      "Based around Nevada's second tallest mountain, Wheeler Peak, Great Basin National Park contains 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park has some of the country's darkest night skies. Wildlife includes the Townsend's big-eared bat, pronghorn, and Bonneville cutthroat trout."
  },
  {
    Name: "Great Sand Dunes",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Coloradodunes.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Coloradodunes.jpg/200px-Coloradodunes.jpg",
    Location: "Colorado",
    Established: "September 13, 2004",
    Area: "107,341.87 acres (434.4 km2)",
    "Recreation visitors": "442,905",
    Description:
      "The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also has alpine lakes, six 13,000-foot mountains, and old-growth forests."
  },
  {
    Name: "Great Smoky Mountains",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Fall_at_Oconaluftee_Overlook.JPG",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fall_at_Oconaluftee_Overlook.JPG/200px-Fall_at_Oconaluftee_Overlook.JPG",
    Location: "Tennessee, North Carolina",
    Established: "June 15, 1934",
    Area: "522,426.88 acres (2,114.2 km2)",
    "Recreation visitors": "11,421,200",
    Description:
      "The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5000 plant species. Hiking is the park's main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures. (WHS) (BR)"
  },
  {
    Name: "Guadalupe Mountains",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg/200px-West_face_of_Guadalupe_Mountains_at_sunset_2006.jpg",
    Location: "Texas",
    Established: "October 15, 1966",
    Area: "86,367.10 acres (349.5 km2)",
    "Recreation visitors": "172,347",
    Description:
      "This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef from the Permian era."
  },
  {
    Name: "Haleakalā",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Haleakala_Crater.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Haleakala_Crater.jpg/200px-Haleakala_Crater.jpg",
    Location: "Hawaii",
    Established: "August 1, 1916",
    Area: "33,264.62 acres (134.6 km2)",
    "Recreation visitors": "1,044,084",
    Description:
      "The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, Hosmer's Grove of alien trees, the Kipahulu section's scenic pools of freshwater fish, and the native Hawaiian goose. The park protects the greatest number of endangered species within a U.S. National Park. (BR)"
  },
  {
    Name: "Hawaiʻi Volcanoes",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Puu_Oo_cropped.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Puu_Oo_cropped.jpg/200px-Puu_Oo_cropped.jpg",
    Location: "Hawaii",
    Established: "August 1, 1916",
    Area: "325,605.28 acres (1,317.7 km2)",
    "Recreation visitors": "1,116,891",
    Description:
      "This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world's most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m). (WHS) (BR)"
  },
  {
    Name: "Hot Springs",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Hots_Springs_National_Park_aerial.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hots_Springs_National_Park_aerial.jpg/200px-Hots_Springs_National_Park_aerial.jpg",
    Location: "Arkansas",
    Established: "March 4, 1921",
    Area: "5,551.76 acres (22.5 km2)",
    "Recreation visitors": "1,506,887",
    Description:
      "Hot Springs was established as a federal reserve by Congress on April 20, 1832—the oldest area managed by the National Park Service. Congress redesignated Hot Springs as a national park on March 4, 1921. Natural hot springs flow out of the Ouachita Mountains, providing opportunities for relaxation in a historic setting. Bathhouse Row preserves numerous examples of 19th-century architecture. Hot Springs is the first national park in a city and was the smallest national park until February 22, 2018 when the Jefferson National Expansion Memorial was redesignated Gateway Arch National Park."
  },
  {
    Name: "Indiana Dunes",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2010-11-26_3060x2040_portage_indiana_dunes.jpg/200px-2010-11-26_3060x2040_portage_indiana_dunes.jpg",
    Location: "Indiana",
    Established: "February 15, 2019",
    Area: "15,348.43 acres (62.1 km2)",
    "Recreation visitors": "1,756,079",
    Description:
      "Previously designated a national lakeshore, the dunes run for nearly 25 miles (40 km) along the southern shore of Lake Michigan. The sandy beach adjoins a grassy prairie, bog, and wetlands home to over 2,000 species."
  },
  {
    Name: "Isle Royale",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/IsleRoyalePlane.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/IsleRoyalePlane.jpg/200px-IsleRoyalePlane.jpg",
    Location: "Michigan",
    Established: "April 3, 1940",
    Area: "571,790.30 acres (2,314.0 km2)",
    "Recreation visitors": "25,798",
    Description:
      "The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the entire island, though the relationship between its wolf and moose populations is especially unique. (BR)"
  },
  {
    Name: "Joshua Tree",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg/200px-Joshua_Tree_-_Rock_formation_in_Real_Hidden_Valley_1.jpg",
    Location: "California",
    Established: "October 31, 1994",
    Area: "790,635.74 acres (3,199.6 km2)",
    "Recreation visitors": "2,942,382",
    Description:
      "Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths. (BR)"
  },
  {
    Name: "Katmai",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Brown_bears_brooks_falls.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Brown_bears_brooks_falls.jpg/200px-Brown_bears_brooks_falls.jpg",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "3,674,529.33 acres (14,870.3 km2)",
    "Recreation visitors": "37,818",
    Description:
      "This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, as well as Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines."
  },
  {
    Name: "Kenai Fjords",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Exit_Glacier_Jul09.JPG",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Exit_Glacier_Jul09.JPG/200px-Exit_Glacier_Jul09.JPG",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "669,650.05 acres (2,710.0 km2)",
    "Recreation visitors": "321,596",
    Description:
      "Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is Exit Glacier; the rest must be viewed or reached from boat tours."
  },
  {
    Name: "Kings Canyon",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/KingsCanyonNP.JPG",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/KingsCanyonNP.JPG/200px-KingsCanyonNP.JPG",
    Location: "California",
    Established: "March 4, 1940",
    Area: "461,901.20 acres (1,869.2 km2)",
    "Recreation visitors": "699,023",
    Description:
      "Home to several giant sequoia groves and the General Grant Tree, the world's second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave. Although Kings Canyon National Park was designated as such in 1940, it subsumed General Grant National Park, which had been established on October 1, 1890 as the United States' fourth national park.(BR)"
  },
  {
    Name: "Kobuk Valley",
    Image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Agie_River.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Agie_River.jpg/200px-Agie_River.jpg",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "1,750,716.16 acres (7,084.9 km2)",
    "Recreation visitors": "14,937",
    Description:
      "Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils."
  },
  {
    Name: "Lake Clark",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Lake_Clark_National_Park.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lake_Clark_National_Park.jpg/200px-Lake_Clark_National_Park.jpg",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "2,619,816.49 acres (10,602.0 km2)",
    "Recreation visitors": "14,479",
    Description:
      "The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape."
  },
  {
    Name: "Lassen Volcanic",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Lake_Helen_-_Flickr_-_Joe_Parks.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lake_Helen_-_Flickr_-_Joe_Parks.jpg/200px-Lake_Helen_-_Flickr_-_Joe_Parks.jpg",
    Location: "California",
    Established: "August 9, 1916",
    Area: "106,589.02 acres (431.4 km2)",
    "Recreation visitors": "499,435",
    Description:
      "Lassen Peak, the largest lava dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder cone, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak."
  },
  {
    Name: "Mammoth Cave",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Mammoth_Cave_National_Park_007.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Mammoth_Cave_National_Park_007.jpg/200px-Mammoth_Cave_National_Park_007.jpg",
    Location: "Kentucky",
    Established: "July 1, 1941",
    Area: "54,011.91 acres (218.6 km2)",
    "Recreation visitors": "533,206",
    Description:
      "With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world's longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs. (WHS) (BR)"
  },
  {
    Name: "Mesa Verde",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg/200px-Mesa_Verde_National_Park_Cliff_Palace_Right_Part_2006_09_12.jpg",
    Location: "Colorado",
    Established: "June 29, 1906",
    Area: "52,485.17 acres (212.4 km2)",
    "Recreation visitors": "563,420",
    Description:
      "This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels. (WHS)"
  },
  {
    Name: "Mount Rainier",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mount_Rainier_from_west.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mount_Rainier_from_west.jpg/200px-Mount_Rainier_from_west.jpg",
    Location: "Washington",
    Established: "March 2, 1899",
    Area: "236,381.64 acres (956.6 km2)",
    "Recreation visitors": "1,518,491",
    Description:
      "Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the largest in the contiguous United States. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is the snowiest place on Earth where snowfall is measured regularly. The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain."
  },
  {
    Name: "North Cascades",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Cascade_pass.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Cascade_pass.jpg/200px-Cascade_pass.jpg",
    Location: "Washington",
    Established: "October 2, 1968",
    Area: "504,780.94 acres (2,042.8 km2)",
    "Recreation visitors": "30,085",
    Description:
      "This complex includes two geographically distinct units of the national park, as well as Ross Lake and Lake Chelan National Recreation Areas. The highly glaciated mountains are spectacular examples of Cascade geology. Popular hiking and climbing areas include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak."
  },
  {
    Name: "Olympic",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Acer_macrophyllum_in_Hoh_Rain_Forest.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Acer_macrophyllum_in_Hoh_Rain_Forest.jpg/200px-Acer_macrophyllum_in_Hoh_Rain_Forest.jpg",
    Location: "Washington",
    Established: "June 29, 1938",
    Area: "922,649.41 acres (3,733.8 km2)",
    "Recreation visitors": "3,104,455",
    Description:
      "Situated on the Olympic Peninsula, this park includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the alpine slopes of the Olympic Mountains, the tallest of which is Mount Olympus. The Hoh Rainforest and Quinault Rainforest are the wettest area in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year. (WHS) (BR)"
  },
  {
    Name: "Petrified Forest",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/PAINTED_DESERT_BADLANDS.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/PAINTED_DESERT_BADLANDS.jpg/200px-PAINTED_DESERT_BADLANDS.jpg",
    Location: "Arizona",
    Established: "December 9, 1962",
    Area: "221,390.21 acres (895.9 km2)",
    "Recreation visitors": "644,922",
    Description:
      "This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park."
  },
  {
    Name: "Pinnacles",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Pinnacles_National_Park.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinnacles_National_Park.jpg/200px-Pinnacles_National_Park.jpg",
    Location: "California",
    Established: "January 10, 2013",
    Area: "26,685.73 acres (108.0 km2)",
    "Recreation visitors": "222,152",
    Description:
      "Named for the eroded leftovers of a portion of an extinct volcano, the park's massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is home to the endangered California condor (Gymnogyps californianus) and one of the few locations in the world where these extremely rare birds can be seen in the wild. Pinnacles also supports a dense population of prairie falcons, and more than 13 species of bat which populate its talus caves."
  },
  {
    Name: "Redwood",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Redwood_National_Park%2C_fog_in_the_forest.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Redwood_National_Park%2C_fog_in_the_forest.jpg/200px-Redwood_National_Park%2C_fog_in_the_forest.jpg",
    Location: "California",
    Established: "October 2, 1968",
    Area: "138,999.37 acres (562.5 km2)",
    "Recreation visitors": "482,536",
    Description:
      "This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species. (WHS)"
  },
  {
    Name: "Rocky Mountain",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg/200px-Bierstadt_Lake%2C_Rocky_Mountain_National_Park%2C_USA.jpg",
    Location: "Colorado",
    Established: "January 26, 1915",
    Area: "265,807.25 acres (1,075.7 km2)",
    "Recreation visitors": "4,590,493",
    Description:
      "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m). (BR)"
  },
  {
    Name: "Saguaro",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Saguaronationalparl17102008.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saguaronationalparl17102008.jpg/200px-Saguaronationalparl17102008.jpg",
    Location: "Arizona",
    Established: "October 14, 1994",
    Area: "91,715.72 acres (371.2 km2)",
    "Recreation visitors": "957,405",
    Description:
      "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas."
  },
  {
    Name: "Sequoia",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Giant_Forest.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Giant_Forest.jpg/200px-Giant_Forest.jpg",
    Location: "California",
    Established: "September 25, 1890",
    Area: "404,062.63 acres (1,635.2 km2)",
    "Recreation visitors": "1,229,594",
    Description:
      "This park protects the Giant Forest, which boasts some of the world's largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome. (BR)"
  },
  {
    Name: "Shenandoah",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg/200px-Early_Fall_at_Dark_Hollow_Falls_%2822028259442%29.jpg",
    Location: "Virginia",
    Established: "December 26, 1935",
    Area: "199,223.77 acres (806.2 km2)",
    "Recreation visitors": "1,264,880",
    Description:
      "Shenandoah's Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River."
  },
  {
    Name: "Theodore Roosevelt",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Theodore_Roosevelt_National_Park.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Theodore_Roosevelt_National_Park.jpg/200px-Theodore_Roosevelt_National_Park.jpg",
    Location: "North Dakota",
    Established: "November 10, 1978",
    Area: "70,446.89 acres (285.1 km2)",
    "Recreation visitors": "749,389",
    Description:
      "This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt's historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses."
  },
  {
    Name: "Virgin Islands",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/St_John_Trunk_Bay_1.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/St_John_Trunk_Bay_1.jpg/200px-St_John_Trunk_Bay_1.jpg",
    Location: "United States Virgin Islands",
    Established: "August 2, 1956",
    Area: "14,944.53 acres (60.5 km2)",
    "Recreation visitors": "112,287",
    Description:
      "This island park on Saint John preserves Taíno archaeological sites and the ruins of sugar plantations from Columbus's time, as well as all the natural environs. Surrounding the pristine beaches are mangrove forests, seagrass beds, and coral reefs."
  },
  {
    Name: "Voyageurs",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Voyageurs_National_Park.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Voyageurs_National_Park.jpg/200px-Voyageurs_National_Park.jpg",
    Location: "Minnesota",
    Established: "January 8, 1971",
    Area: "218,200.15 acres (883.0 km2)",
    "Recreation visitors": "239,656",
    Description:
      "This park protecting four lakes near the Canada–US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings."
  },
  {
    Name: "Wind Cave",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Wind_Cave_lower.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Wind_Cave_lower.jpg/200px-Wind_Cave_lower.jpg",
    Location: "South Dakota",
    Established: "January 9, 1903",
    Area: "33,970.84 acres (137.5 km2)",
    "Recreation visitors": "656,397",
    Description:
      'Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. The cave is one of the longest and most complex caves in the world. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs, and ponderosa pine forests that are home to cougars and elk. The cave is culturally significant to the Lakota people as the site "from which Wakan Tanka, the Great Mystery, sent the buffalo out into their hunting grounds."'
  },
  {
    Name: "Wrangell–St. Elias",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/MountJarvis.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/MountJarvis.jpg/200px-MountJarvis.jpg",
    Location: "Alaska",
    Established: "December 2, 1980",
    Area: "8,323,146.48 acres (33,682.6 km2)",
    "Recreation visitors": "79,450",
    Description:
      "An over 8 million acres (32,375 km2) plot of mountainous country—the largest national park in the system—protects the convergence of the Alaska, Chugach, and Wrangell-Saint Elias Ranges, which include many of the continent's tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier. (WHS)"
  },
  {
    Name: "Yellowstone",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg/200px-Grand_Prismatic_Spring_and_Midway_Geyser_Basin_from_above.jpg",
    Location: "Wyoming, Montana, Idaho",
    Established: "March 1, 1872",
    Area: "2,219,790.71 acres (8,983.2 km2)",
    "Recreation visitors": "4,115,000",
    Description:
      "Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including gray wolves, grizzly bears, black bears, lynxes, bison, and elk, make this park one of the best wildlife viewing spots in the country. (WHS) (BR)"
  },
  {
    Name: "Yosemite",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/YosemitePark2_amk.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/YosemitePark2_amk.jpg/200px-YosemitePark2_amk.jpg",
    Location: "California",
    Established: "October 1, 1890",
    Area: "761,747.50 acres (3,082.7 km2)",
    "Recreation visitors": "4,009,436",
    Description:
      "Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park's centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America's tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species. (WHS)"
  },
  {
    Name: "Zion",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Angels_Landing.jpg",
    Thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Angels_Landing.jpg/200px-Angels_Landing.jpg",
    Location: "Utah",
    Established: "November 19, 1919",
    Area: "147,242.66 acres (595.9 km2)",
    "Recreation visitors": "4,320,033",
    Description:
      "Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest."
  }
];

export function getParks() {
  return parks;
}
