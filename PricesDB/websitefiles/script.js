document.addEventListener('DOMContentLoaded', function () {
    // Handle form submission
    var form = document.getElementById('dataForm');
    // Assuming you have a form with input elements
// const form = document.getElementById('yourFormId'); // Replace with your actual form ID

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form input values
    const formName = document.getElementById('nameInput').value;
    const formPriceDayTo = document.getElementById('priceDayToInput').value;
    const formPriceNightTo = document.getElementById('priceNightToInput').value;
    const formPriceDayFrom = document.getElementById('priceDayFromInput').value;
    const formPriceNightFrom = document.getElementById('priceNightFromInput').value;

    // Construct the data object based on the form inputs
    const newData = {
        name: formName,
        PriceDayTo: parseInt(formPriceDayTo),
        PriceNightTo: parseInt(formPriceNightTo),
        PriceDayFrom: parseInt(formPriceDayFrom),
        PriceNightFrom: parseInt(formPriceNightFrom)
    };

    // Make the PUT request to the server
    fetch('http://localhost:5500/data.json', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    })
    .catch(error => console.error('Error:', error));
});

});

async function loadJSON() {
    try {
        const response = await fetch('/data.json');
        if (!response.ok) {
            throw new Error('Error loading JSON file');
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function saveJSON(data) {
    try {
        const response = await fetch('/data.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Error updating JSON file');
        }
    } catch (error) {
        throw error;
    }
}
