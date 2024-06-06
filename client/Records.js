const recordsContainer = document.querySelector('#RecordsContainer')


let recordNameArray = []
let recordIdArray = []

document.addEventListener('DOMContentLoaded', async () => {
    refresh()
    setupForm();
    setupDeleteButton();
})

toggleFormButton.addEventListener('click', () => {
    if (recordForm.style.display === 'none' || recordForm.style.display === '') {
        recordForm.style.display = 'flex';
    } else {
        recordForm.style.display = 'none';
    }
});

async function refresh() {

    let recordArray = []

    try {

        let response = await axios.get('http://localhost:3003/records')
        recordArray = response.data

        recordsContainer.innerHTML = ''

        recordNameArray = [];
        recordIdArray = [];

        for (const recordObject of recordArray) {
            const newCard = document.createElement('div')
            newCard.classList.add('cards')
            const newSpeciesName = document.createElement('div')
            newCard.setAttribute('id', recordObject._id)

            newSpeciesName.setAttribute('id', 'species-name')
            newSpeciesName.innerText = `Species: ${recordObject.species_name}`
            newCard.appendChild(newSpeciesName)

            const newLength = document.createElement('div')
            newLength.setAttribute('id', 'length')
            newLength.innerText = `Length in Inches: ${recordObject.length_inches}`
            newCard.appendChild(newLength)

            const newWeight = document.createElement('div')
            newWeight.setAttribute('id', 'weight')
            newWeight.innerText = `Weight Lbs: ${recordObject.weight_lboz}`
            newCard.appendChild(newWeight)

            const newState = document.createElement('div')
            newState.setAttribute('id', 'state')
            newState.innerText = `State Caught: ${recordObject.state}`
            newCard.appendChild(newState)

            const newbodyWater = document.createElement('div')
            newbodyWater.setAttribute('id', 'bodyWater')
            newbodyWater.innerText = `Body of Water: ${recordObject.bodyWater}`
            newCard.appendChild(newbodyWater)

            const newanglerName = document.createElement('div')
            newanglerName.setAttribute('id', 'anglerName')
            newanglerName.innerText = `Anglers Name: ${recordObject.anglers_name}`
            newCard.appendChild(newanglerName)

            const newfishImg = document.createElement('img');
            newfishImg.classList.add('fish-img2')
            newCard.appendChild(newfishImg);
           
            newfishImg.setAttribute('src',recordObject.fish_img);

            newCard.addEventListener('click', () => populateForm(recordObject));

            recordsContainer.appendChild(newCard)

            recordNameArray.push(recordObject.species_name);
            recordIdArray.push(recordObject._id);

           

        }

    } catch (error) {
        console.log('Error fetching data', error)
    }
}


function setupForm() {
    recordForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(recordForm);
        const recordData = Object.fromEntries(formData.entries());
        const recordId = recordData.recordId;

        try {
            if (recordId) {
                // Update existing record
                await axios.put(`http://localhost:3003/records/${recordId}`, recordData);
            } else {
                // Create new record
                await axios.post('http://localhost:3003/records', recordData);
            }
            refresh();
            recordForm.reset();
        } catch (error) {
            console.log('Error saving data', error);
        }
    });
}

function populateForm(recordObject) {
    document.getElementById('recordId').value = recordObject._id;
    document.getElementById('species_name').value = recordObject.species_name;
    document.getElementById('length_inches').value = recordObject.length_inches;
    document.getElementById('weight_lboz').value = recordObject.weight_lboz;
    document.getElementById('state').value = recordObject.state;
    document.getElementById('bodyWater').value = recordObject.bodyWater;
    document.getElementById('anglers_name').value = recordObject.anglers_name;
    document.getElementById('fish_img').value = recordObject.fish_img;
}

function setupDeleteButton() {
    deleteButton.addEventListener('click', async () => {
        const recordId = document.getElementById('recordId').value;
        if (recordId) {
            try {
                await axios.delete(`http://localhost:3003/records/${recordId}`);
                refresh();
                recordForm.reset();
            } catch (error) {
                console.log('Error deleting data', error);
            }
        }
    });
}