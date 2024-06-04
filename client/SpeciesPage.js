const speciesContainer = document.querySelector('#speciesContainer')

let speciesNameArray = []
let speciesIdArray = []

document.addEventListener('DOMContentLoaded', async () => {
    refresh()
})

async function refresh() {
    let speciesArray = []
    let infoArray = []
    let tacticsArray = []
    speciesContainer.innerHTML = ""

    try {
        let speciesResponse = await axios.get('http://localhost:3003/species')
        speciesArray = speciesResponse.data

        let infoResponse = await axios.get('http://localhost:3003/info')
        infoArray = infoResponse.data

        let tacticsResponse = await axios.get('http://localhost:3003/tactics')
        tacticsArray = tacticsResponse.data

        for (const speciesObject of speciesArray) {
            const newCard = document.createElement('div')
            newCard.classList.add('card')
            newCard.setAttribute('id', speciesObject._id)
            console.log(speciesObject._id)

            // Make element for image and append it
            const newImage = document.createElement('img')
            newImage.classList.add('fish-img')
            newImage.setAttribute('src', speciesObject.pic)
            newCard.appendChild(newImage)

            // Make element for name and append it
            const newName = document.createElement('div')
            newName.classList.add('species-name')
            newName.innerText = `Name: ${speciesObject.name}`
            newCard.appendChild(newName)

            // Make element for saltfresh and add to the card
            const newSaltFreshOrBoth = document.createElement('div')
            newSaltFreshOrBoth.classList.add('species-saltFreshOrBoth')
            newSaltFreshOrBoth.innerText = `Habitat: ${speciesObject.saltFreshOrBoth}`
            newCard.appendChild(newSaltFreshOrBoth)

            // Make an element for prevalence and add it to the card
            const newPrevalence = document.createElement('div')
            newPrevalence.classList.add('species-prevalence')
            newPrevalence.innerText = `Prevalence: ${speciesObject.prevelance}`
            newCard.appendChild(newPrevalence)

            // Find the corresponding info object for this species
            const speciesInfo = infoArray.find(info => info.species_id === speciesObject._id)
            if (speciesInfo) {
                const newTemperment = document.createElement('div')
                newTemperment.classList.add('species-temperment')
                newTemperment.innerText = `Temperment: ${speciesInfo.temperment}`
                newCard.appendChild(newTemperment)

                const newLocations = document.createElement('div')
                newLocations.classList.add('species-locations')
                newLocations.innerText = `Locations: ${speciesInfo.locations}`
                newCard.appendChild(newLocations)

            }

            // Find the corresponding tactics object for this species
            // const speciesTactics = tacticsArray.find(tactics => tactics.species_id === speciesObject._id)
            // if (speciesTactics) {
            //     newCard.addEventListener('click', () => {
            //         window.location.href = `tactics.html?tacticsId=${speciesTactics._id}`
            //     })
            // }
            

            speciesContainer.appendChild(newCard)

            speciesNameArray.push(speciesObject.name)
            speciesIdArray.push(speciesObject._id)

            cards = document.querySelectorAll(".card")

            cards.forEach(function(card) {
                card.addEventListener('click', function() {
                    idCopy = card.getAttribute('id')
                    nameCopy = speciesNameArray[speciesIdArray.indexOf(idCopy)]
                    localStorage.setItem('speciesId', idCopy)
                    localStorage.setItem('speciesName', nameCopy)
                    
                    console.log(nameCopy)
                    console.log(idCopy)
                    window.open('infoTactics', '_blank')

                })
            })
            
        }
        

    } catch (error) {
        console.log('Error fetching data:', error)
    }
}


