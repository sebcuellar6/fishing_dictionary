
const tacticsContainer = document.querySelector('#tacticsContainer')







document.addEventListener('DOMContentLoaded', async () => {
    speciesId = localStorage.getItem('speciesId')
    speciesName = localStorage.getItem('speciesName')
    if(speciesId) {
        await loadInfo()
    }else {
        console.log('No species selected')
    }
})

async function loadInfo() {

try {

    let speciesResponse = await axios.get(`http://localhost:3003/species/${speciesId}`)
        speciesData = speciesResponse.data

    let infoResponse = await axios.get(`http://localhost:3003/info/species/${speciesId}`)
        infoData = infoResponse.data

    let tacticsResponse = await axios.get(`http://localhost:3003/tactics/species/${speciesId}`)
        tacticsData = tacticsResponse.data

    const newContainer = document.createElement('div')
    newContainer.classList.add('container')
    tacticsContainer.appendChild(newContainer)

    const newName = document.createElement('div')
    newName.innerText = `${speciesData.name}`
    newContainer.appendChild(newName)

    const newPrevalence = document.createElement('div')
    newPrevalence.classList.add('species-prevalence')
    newPrevalence.innerText = `Prevalence: ${speciesData.prevelance}`
    newContainer.appendChild(newPrevalence)

    const newTemperment = document.createElement('div')
    newTemperment.classList.add('species-temperment')
    newTemperment.innerText = `Temperment: ${infoData.temperment}`
    newContainer.appendChild(newTemperment)

    const newLocations = document.createElement('div')
    newLocations.classList.add('species-locations')
    newLocations.innerText = `Locations: ${infoData.locations}`
    newContainer.appendChild(newLocations)

    const newSaltFreshOrBoth = document.createElement('div')
    newSaltFreshOrBoth.classList.add('species-saltFreshOrBoth')
    newSaltFreshOrBoth.innerText = `Habitat: ${speciesData.saltFreshOrBoth}`
    newContainer.appendChild(newSaltFreshOrBoth)

    const newFavoriteFoods = document.createElement('div')
    newFavoriteFoods.classList.add('species-favoriteFoods')
    newFavoriteFoods.innerText = `Favorite Foods: ${infoData.favouriteFoods}`
    newContainer.appendChild(newFavoriteFoods)

    const newDescription = document.createElement('div')
    newDescription.classList.add('species-description')
    newDescription.innerText = `Description: ${infoData.description}`
    newContainer.appendChild(newDescription)

    
//add fishing tactics

    const newDifficulty = document.createElement('div')
    newLocations.classList.add('species-difficulty')
    newLocations.innerText = `Difficulty: ${tacticsData.difficulty}`
    newContainer.appendChild(newDifficulty)            
    
    const newBowSpear = document.createElement('div')
    newBowSpear.classList.add('bowSpear')
    newBowSpear.innerText = `Bow/Spearfishing: ${tacticsData.bowSpearfish}`
    newContainer.appendChild(newBowSpear) 
    
    const newBaitsLures = document.createElement('div')
    newBaitsLures.classList.add('baitLure')
    newBaitsLures.innerText = `Baits & Lures: ${tacticsData.baitsLures}`
    newContainer.appendChild(newBaitsLures)      


} catch (error) {
    console.log('Error fetching data', error)
}

}

