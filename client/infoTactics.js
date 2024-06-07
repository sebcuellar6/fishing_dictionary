
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
    newName.setAttribute('id', 'name')
    newContainer.appendChild(newName)

    const newPrevalence = document.createElement('div')
    newPrevalence.setAttribute('id', 'prevalence')
    newPrevalence.innerText = `Prevalence: ${speciesData.prevelance}`
    newContainer.appendChild(newPrevalence)

    const newTemperment = document.createElement('div')
    newTemperment.setAttribute('id', 'temperment')
    newTemperment.innerText = `Temperment: ${infoData.temperment}`
    newContainer.appendChild(newTemperment)

    const newLocations = document.createElement('div')
    newLocations.setAttribute('id', 'locations')
    newLocations.innerText = `Locations: ${infoData.locations}`
    newContainer.appendChild(newLocations)

    const newSaltFreshOrBoth = document.createElement('div')
    newSaltFreshOrBoth.setAttribute('id', 'saltFreshOrBoth')
    newSaltFreshOrBoth.innerText = `Habitat: ${speciesData.saltFreshOrBoth}`
    newContainer.appendChild(newSaltFreshOrBoth)

    const newfishingImg = document.createElement('img')
    newfishingImg.classList.add('fishingImg')
    newfishingImg.setAttribute('src', tacticsData.fishingPic)
    newContainer.appendChild(newfishingImg)

    const newFavoriteFoods = document.createElement('div')
    newFavoriteFoods.setAttribute('id', 'favoriteFoods')
    newFavoriteFoods.innerText = `Favorite Foods: ${infoData.favouriteFoods}`
    newContainer.appendChild(newFavoriteFoods)

    const newDescription = document.createElement('div')
    newDescription.setAttribute('id', 'description')
    newDescription.innerText = `Helpful Information: ${infoData.description}`
    newContainer.appendChild(newDescription)

    
//add fishing tactics

    const newDifficulty = document.createElement('div')
    newLocations.setAttribute('id', 'difficulty')
    newLocations.innerText = `Difficulty: ${tacticsData.difficulty}`
    newContainer.appendChild(newDifficulty)
    
    
    
    const newBaitsLures = document.createElement('div')
    newBaitsLures.setAttribute('id', 'baitLure')
    newBaitsLures.innerText = `Baits & Lures: ${tacticsData.baitsLures}`
    newContainer.appendChild(newBaitsLures)
    
    const newFishRundown = document.createElement('div')
    newFishRundown.setAttribute('id', 'rundown')
    newFishRundown.innerText = `Fishing Rundown: ${tacticsData.fishingRundown}`
    newContainer.appendChild(newFishRundown)

    
 

} catch (error) {
    console.log('Error fetching data', error)
}

}

