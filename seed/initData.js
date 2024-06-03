const db = require('../db')
const { Species, Info, Tactics } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const resetCollections = async () => {
    try {
        await Species.deleteMany({});
        await Info.deleteMany({});
        await Tactics.deleteMany({});
        console.log('All collection reset');
    } catch (error) {
        console.error('Error resetting collections:', error);
    }
}



const main = async () => {

    await resetCollections();   

  const species1 = await new Species({
        name: 'Largemouth Bass1',
        saltFreshOrBoth: 'Fresh',
        prevelance: 'Common',
        pic: 'bgPics/bassBackground.jpeg'
  })
  await species1.save()

  const species2 = await new Species({
    name: 'Largemouth Bass2',
    saltFreshOrBoth: 'Fresh',
    prevelance: 'Common',
    pic: 'bgPics/bassBackground.jpeg'
})
await species2.save()

const species3 = await new Species({
  name: 'Largemouth Bass3',
  saltFreshOrBoth: 'Fresh',
  prevelance: 'Common',
  pic: 'bgPics/bassBackground.jpeg'
})
await species3.save()

const species4 = await new Species({
  name: 'Largemouth Bass4',
  saltFreshOrBoth: 'Fresh',
  prevelance: 'Common',
  pic: 'bgPics/bassBackground.jpeg'
})
await species4.save()





  const infoArray = [
    {
        species_id: species1._id,
        temperment: 'Aggressive',
        locations: 'All States besides Alaska',
        favouriteFoods: 'Small baitfish, crawfish, worms, small rodents and birds, insects, and small amphibiens and reptiles as well as any other fish that will fit in their mouth.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
    },
    {
      species_id: species2._id,
      temperment: 'Aggressive',
      locations: 'All States besides Alaska',
      favouriteFoods: 'Small baitfish, crawfish, worms, small rodents and birds, insects, and small amphibiens and reptiles as well as any other fish that will fit in their mouth.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
  },
  {
    species_id: species3._id,
    temperment: 'Aggressive',
    locations: 'All States besides Alaska',
    favouriteFoods: 'Small baitfish, crawfish, worms, small rodents and birds, insects, and small amphibiens and reptiles as well as any other fish that will fit in their mouth.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
},
{
  species_id: species4._id,
  temperment: 'Aggressive',
  locations: 'All States besides Alaska',
  favouriteFoods: 'Small baitfish, crawfish, worms, small rodents and birds, insects, and small amphibiens and reptiles as well as any other fish that will fit in their mouth.',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
},
  
  ]

  // await Bicycle.insertMany(bicycleArray)
  const inform = await Info.insertMany(infoArray)
  console.log('Created information!')
  

    
  const tacticsArray  = [
    {
    species_id: species1._id,
    difficulty: 'Intermediate',
    bowSpearfish: 'Only fishing by line.',
    baitsLures: 'Crankbaits, soft plastics, swimbaits, jigs, as well as live baits like minnows, frogs, worms, and crickets.',
    fishingRundown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
    }, 
    {
      species_id: species2._id,
      difficulty: 'Intermediate',
      bowSpearfish: 'Only fishing by line.',
      baitsLures: 'Crankbaits, soft plastics, swimbaits, jigs, as well as live baits like minnows, frogs, worms, and crickets.',
      fishingRundown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
      },
      {
        species_id: species3._id,
        difficulty: 'Intermediate',
        bowSpearfish: 'Only fishing by line.',
        baitsLures: 'Crankbaits, soft plastics, swimbaits, jigs, as well as live baits like minnows, frogs, worms, and crickets.',
        fishingRundown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
        },
        {
          species_id: species4._id,
          difficulty: 'Intermediate',
          bowSpearfish: 'Only fishing by line.',
          baitsLures: 'Crankbaits, soft plastics, swimbaits, jigs, as well as live baits like minnows, frogs, worms, and crickets.',
          fishingRundown: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat nunc, ultrices vitae est finibus, ullamcorper ultrices risus. Integer vehicula eros vel metus feugiat lacinia. Nulla non consequat nulla, ut rhoncus ipsum. Aenean et scelerisque sem. Nulla ullamcorper odio id lacus egestas, id pulvinar metus scelerisque. Sed quis tortor nibh. Proin dui dui, egestas eget consectetur non, aliquam ullamcorper felis.',
          },
    ]
    
    // bicycleArray.save()
    // bellArray.save()

    await Tactics.insertMany(tacticsArray)
    console.log('Created tactics!')
}

const run = async () => {
  await main()
  db.close()
}

run()