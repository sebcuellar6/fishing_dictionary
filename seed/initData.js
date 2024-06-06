const db = require('../db')
const { Species, Info, Tactics, Record } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Species.deleteMany({});
        await Info.deleteMany({});
        await Tactics.deleteMany({});
        await Record.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
}



const main = async () => {

    await resetCollections();   

  const bass = await new Species({
        name: 'Largemouth Bass',
        saltFreshOrBoth: 'Fresh',
        prevelance: 'Common',
        pic: 'bgPics/bassBackground.jpeg'
  })
  await bass.save()

  const channelcatfish = await new Species({
    name: 'Channel Catfish',
    saltFreshOrBoth: 'Mostly Fresh sometimes Brackish',
    prevelance: 'Common',
    pic: 'bgPics/channelcat.jpeg'
})
await channelcatfish.save()

const redfish = await new Species({
  name: 'Redfish',
  saltFreshOrBoth: 'Brackish, Salt, and Fresh',
  prevelance: 'Common',
  pic: 'bgPics/redfish.jpeg'
})
await redfish.save()

const sharks = await new Species({
  name: 'Sharks',
  saltFreshOrBoth: 'Brackish, Salt, and Fresh',
  prevelance: 'Common',
  pic: 'bgPics/shark.jpeg'
})
await sharks.save()





  const infoArray = [
    {
        species_id: bass._id,
        temperment: 'Aggressive',
        locations: 'All States besides Alaska',
        favouriteFoods: 'Adult largemouth bass feed on fish, crayfish, and frogs. With the young feeding on crustaceans, insects, and small fish.  Largemouth bass are voracious eaters, with many different animals becoming prey to this fierce eater. Even terrestrial animals like snakes and mice. Some largemouth bass can be cannibalistic too, just like the northern pike. Largemouth bass normally do not feed during spawning or when the water temperature dips below 41 degrees Fahrenheit or above 98.6 degrees Fahrenheit.',
        description: 'Largemouth bass inhabit clear, vegetated lakes, ponds, swamps, and the backwaters of pools, creeks and rivers. Largemouth bass prefer spawning areas with a bottom of sand, mud or gravel. Adult largemouth bass use submerged aquatic vegetation as cover to ambush prey and juvenile or young largemouth use aquatic weeds, tree limbs or submerged log or stumps as cover to escape predation. Dissolved oxygen is also an important hydrological condition essential to largemouth bass habitat.  Largemouth bass grow best in temperate to subtropical waters, with northern fish taking many more years to reach a given size than fish living in warmer southern waters.',
    },
    {
      species_id: channelcatfish._id,
      temperment: 'Aggressive',
      locations: 'All States besides Alaska',
      favouriteFoods: 'Channel catfish are bottom-dwelling, opportunistic omnivores that have excellent senses of smell and taste, which they use to find food in dark and muddy waters. Though catfish have taste receptors all over their body, the highest concentration of receptors is located on the four pairs of barbels (or "whiskers") that surround the mouth. They will eat just about anything that they can find',
      description: 'The channel catfish is North Americas most numerous catfish species. It is the official fish of Kansas, Missouri, Nebraska, and Tennessee, and is informally referred to as a channel cat. In the United States, they are the most fished catfish species with around 8 million anglers targeting them per year. Channel catfish typically have grayish-blue sides with a black back and a white belly. Though rare in the wild, a channel catfish can carry the recessive alleles resulting in lack of pigmentation, known as albinism. Albino channel catfish have a peach coloration. Some domestic channel catfish have been bred to carry the recessive albino alleles, with these fish being popular in aquariums and ornamental ponds. Average mature channel catfishes weigh between two to four pounds and are at least 12 inches (30 centimeters) long. The world record weight for a channel catfish was a 58-pound (26.3 kilograms) fish caught in South Carolina in 1964.',
  },
  {
    species_id: redfish._id,
    temperment: 'Aggressive',
    locations: 'Texas, California, Alabama, Lousianna, Mississippi, Georgia, South and North Carolina',
    favouriteFoods: 'Young red drum feed on small crabs, shrimp, and marine worms. As they grow older, they feed on larger crabs, shrimp, small fish, and sometimes their cousins, the Atlantic croaker. They generally are bottom feeders but will feed in the water column when the opportunity arises. A phenomenon called "tailing" occurs when the red drum feed in shallow water with their head down in the grass and the tail exposed to the air.',
    description: 'Red drums prefer shallow waters (1-4 feet deep) along the edges of bays with submerged vegetation such as seagrasses. They are found over all bottom types but they seem to prefer areas with submerged vegetation and soft mud. These fish are also commonly found around oyster reefs. Breaks in continuity of shorelines such as coves, points, jetties, old pier pilings, and guts attract them. They prefer soft mud along jetties, pier pilings and jetties. They are often found in water so shallow that their backs are exposed while swimming. During cold spells large numbers of red drum can be found in tidal creeks and rivers. They can live in fresh water and have been found many miles upriver.',
},
{
  species_id: sharks._id,
  temperment: 'Aggressive',
  locations: 'All States on the coast, as well as some channels like the Mississippi',
  favouriteFoods: 'Small baitfish, mullet, other sharks, squid, large animal carcasses, birds, as well as any other fish that will fit in their mouth.',
  description: 'Sharks are fishes and most have the typical fusiform body shape. Like other fishes, sharks are ectothermic (cold-blooded), live in water, have fins, and breathe with gills. However, sharks differ from Osteichthyes fish. One difference is that a sharks skeleton is made of cartilage instead of bone. Another visible difference is that bony fish tend to have a single gill slit, whereas all but two species of shark have 5 gill slits. The characteristic teeth of each species are adapted to that particular species diet. The teeth may be serrated or smooth. Most are used for seizing prey, cutting, or crushing. Some sharks are probably not very picky about what they eat. But certain kinds of sharks eat some foods more than others. For example, hammerhead sharks eat mostly stingrays. Tiger sharks eat sea turtles. And whale sharks eat plankton.',
},
  
  ]

  // await Bicycle.insertMany(bicycleArray)
  const inform = await Info.insertMany(infoArray)
  console.log('Created information!')
  

    
  const tacticsArray  = [
    {
    species_id: bass._id,
    difficulty: 'Easy to Intermediate',
    baitsLures: 'Natural baits include small to medium size baitfish like Shiners, Herring, or Minnows, as well as Worms or Crawfish. Artificial baits include Jigs, Crankbaits, Plastic Worms, Spinnerbaits, and Swimbaits',
    fishingRundown: 'In general, anglers catch bass most frequently when using bait; the largemouth bass and crappie that feed naturally. For this reason, baitfish and crawfish are usually the most consistent types of live bait for catching bass because these are what bass usually eat in many different places. Other popular baits are frogs and worms. Anglers can also use mice, salamanders, and various bugs or larvae for bait to pull bass, depending on where you are fishing. The method you use to fish will depend on where you are, but its very effective to cast a shiner near lily pads and other structures. Wait for a big strike, and then start reeling in. Most charters using shiners will cast out multiple rods and use bobbers to help keep track of them when they get a bite. Then, when the bobber goes down, the angler needs to set the hook and start reeling in their big catch. The bobber method is suitable because it helps keep the bait off the bottom of the lake, which helps increase the lifespan of the baitfish so you wont have to change it out as often. The largemouth bass is a predatory animal, so the best artificial lures to use mimic the prey in the water at the time. Many artificial lures have a unique feature that helps attract bass despite not looking very similar to a real prey animal. For example, they may flash in the light. Jigs can work in both shallow and deep waters and work in various environments, including shoreline grasses and steep underwater banks. Similar to jigs, crankbaits are pretty versatile and can be used in most types of weather, deep and shallow water. Many professional guides have said lipless crankbaits are extra productive during the early spring and late fall, but its been proven on many excellent fishing trips that these can work year-round. Plastic worms are one of the simplest and most effective year-round lures that consistently catch fish. In addition, these versatile lures can be used in almost any condition. Spinnerbaits are usually most effective during the early morning and when night fishing.',
    fishingPic: 'bgPics/bassFishing.jpeg',
    }, 
    {
      species_id: channelcatfish._id,
      difficulty: 'Easy',
      baitsLures: 'Natural baits include worms, baitfish, shrimp, chicken livers, gizzards, and hearts, hotdogs, and most anything you put in the water. Artificial lures arent typically used but sometime channel cats will be caught unintentionally with lures targeting other species of fish.',
      fishingRundown: 'Lake anglers use fairly short rods, while stream anglers like longer 6 to 8 feet rods. Many even use a fly rod. Longer rods offer better placement of the bait and lets you fish many good holes without casting. Just drop the line near a likely spot with no more line out than the rod length. Ten-pound test line is suggested over lighter weight line since the bait is fished on the bottom and often near underwater snags. Match the reel to the fish. Light duty reels are made to catch small fish and heavy duty reels have the power to land lunkers. Light tackle will catch more smaller fish, but may not handle one of record class size.Use a sharp hook. Hooks with bait holders on the shank are preferred. Use sponges or plastic worms when fishing with soft, prepared cheese baits. Present your selected hook and bait to the fish in the most natural manner, which requires the use of a minimum amount of sinker or weight. Circle hooks are popular when using live or cut bait. There is no need to “set the hook” as they are designed to hook the fish themselves. Slowly pull back on the rod when it starts to double over as the fish takes the bait. Quick hook sets typically result in missed fish. When used properly, circle hooks reduce the chance of the fish swallowing the bait as they are usually caught in the corner of the mouth.',
      fishingPic: 'bgPics/catFishing.jpeg',
      },
      {
        species_id: redfish._id,
        difficulty: 'Intermediate',
        baitsLures: 'Natural baits include live shrimp, small finger mullet, Atlantic croaker, and small live blue crabs. Artificials include 1/2 and 1/4 ounce shallow-running gold, copper, or silver spoons, Fish-shaped plugs, both floating and shallow-running.',
        fishingRundown: 'One attractive characteristics of this fish is its willingness to take most kinds of bait, both natural and artificial. The best natural baits are live shrimp, small finger mullet, Atlantic croaker, and small live blue crabs. Live shrimp are fished under a popping cork or "free shrimped" using a small weight and letting the shrimp swim freely. Live fish are best on the bottom using a slip-sinker type rig where the fish can swim freely. The bait fish are hooked through the lips or through the top of the back behind the dorsal fin. Small blue crab are fished on bottom and are hooked through one of the swimming legs at the rear of the crab. Stalking the shallow grass flats for red drum is the ultimate challenge for the wade anglers. Artificial baits such as 1/2 and 1/4 ounce shallow-running gold, copper, or silver spoons are favorites. A weedless spoon is used in areas of heavy submerged or floating vegetation. Fish-shaped plugs, both floating and shallow-running, are effective over the grass flats. Shrimplike plastic worms and jigs are good and both are fished under corks or bounced along the bottom. The surf provides excellent red drum fishing. The best artificial baits are the heavier spoons and slow sinking fish shaped plugs. Plastic worms are also effective bounced along the bottom. "Bull" reds are best caught with natural bait. Fresh cut mullet, larger live mullet (6-8 inches long) and blue crab are the best baits. Both single and double-drop bottom rigs are good. A heavy grabbing sinker is needed to keep baits stationary on the surf bottom. Tackle varies according to angler preference. Surf and pier fishers for "bull" reds prefer rods more than 10 feet in length and stiff enough to handle a heavy terminal tackle. Reels should be large enough to handle several hundred yards of 25-40 pound test line and reels should have a good drag system. For smaller fish (less than 10 pounds), the best rod to use should be 6 1/2 to 8 feet long, has a medium action, and has a two-handed grip to help the anglers in long distance casting. Reels should be able to hold at least 100 yards of line. Line strength will vary depending on what type of habitat is being fished. Heavier line (17-25 pounds) is needed when fishing around oyster shell, rocks, or pilings. Lighter line (8-15 pounds) is favored when fishing the grass flats. Leaders are optional, depending on line weight and where the fishing occurs.',
        fishingPic: 'bgPics/redfishing.jpeg'
        },
        {
          species_id: sharks._id,
          difficulty: 'Intermediate',
          baitsLures: 'Natural baits include ladyfish, mullet, threadfin, bonito, mackerel, jack, bluefish, ballyhoo, squid, and lots of other cut/live baits. Artificial baits include topwater, paddle tails, bucktails, spoons, and jerk baits.',
          fishingRundown: 'For smaller Sharks, a medium-heavy action rod with a 5000 reel is a good start. If youre going after larger Sharks, you should have extra-heavy rods with reels around the 10000 size. For braid, smaller setups do good with 20+ pounds, while larger ones require hundreds of yards of over 50 pounds. Your leader is your best friend when it comes to gear for Shark fishing. The wrong leader will result in a quick and easy slice from the razor-sharp teeth of a Shark. You should have a fluorocarbon leader upwards of 60 pounds when fishing for smaller guys. For the larger ones, youll need a 200 lb leader. A lot of anglers also recommend using wire leaders to prevent the risk of the fish cutting the line. Hooks are also important when it comes to your gear for Shark fishing because the incredible strength of these species allows them to easily bend hooks. Its essential to have large, sturdy hooks, such as ones 8/0 and higher, to ensure a good hookset that wont be bent out of shape. Surf fishing for Sharks is quite the adventure. Typically, anglers use a kayak to pass sandbars and drop their line into the deeper waters. After heading back to shore, you sit around and wait until your line starts to take off. Freelining live bait is similar to surf fishing but from a boat. The depths can vary, as this technique is not limited to any specific area. All you really need to do is add a live bait to a circle hook and throw it out into the water. Trolling is commonly used in deep offshore waters. This method involves dragging bait behind a boat at a steady speed. The Sharks that are interested will chase the bait until they can lunge on it.',
          fishingPic: 'bgPics/sharkFishing.jpeg'
          },
          
    ]

    const recordArray = [
      {
        species_name: 'Largemouth Bass',
        length_inches: 32,
        weight_lboz: 32,
        state: 'Georgia',
        bodyWater: 'Montgomerey Lake',
        anglers_name: 'George Perry',
        fish_img: 'bgPics/gPerry.jpeg'
      },
      {
        species_name: 'Flathead Catfish',
        length_inches: 61,
        weight_lboz: 123,
        state: 'Kansas',
        bodyWater: 'Elk City Reservoir',
        anglers_name: 'Ken Paulie',
        fish_img: 'bgPics/kPaulie.jpeg'
      },
      {
        species_name: 'Hammerhead Shark',
        length_inches: 162,
        weight_lboz: 1000,
        state: 'South Carolina',
        bodyWater: 'Atlantic Ocean',
        anglers_name: 'Chip Michalove',
        fish_img: 'bgPics/cMichalove.jpeg'
      },
      {
        species_name: 'Redfish',
        length_inches: 57,
        weight_lboz: 94,
        state: 'North Carolina',
        bodyWater: 'Hatteras',
        anglers_name: 'David Duel',
        fish_img: 'bgPics/dDuel.jpeg'
      },
    ]
    
   

    await Tactics.insertMany(tacticsArray)
    console.log('Created tactics!')

    await Record.insertMany(recordArray)
    console.log('Added Records!')
}

const run = async () => {
  await main()
  db.close()
}

run()