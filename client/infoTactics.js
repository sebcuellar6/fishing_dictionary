speciesId = localStorage.getItem('speciesId')
speciesName = localStorage.getItem('speciesName')
console.log(speciesName)
console.log(speciesId)



document.addEventListener('DOMContentLoaded', async () => {
    refresh()
})

async function refresh() {

try {

    let speciesResponse = await axios.get('http://localhost:3003/species')
        speciesArray = speciesResponse.data

    let infoResponse = await axios.get('http://localhost:3003/info')
    infoArray = infoResponse.data

    let tacticsResponse = await axios.get('http://localhost:3003/tactics')
    tacticsArray = tacticsResponse.data


} catch (error) {
    console.log('Error fetching data', error)
}

}

