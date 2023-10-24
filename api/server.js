// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample data (you can replace this with your actual data)
const cityData = require('./data/cities.json'); // Store your city data in a JSON file

// Define an API endpoint to get all cities
app.get('/cities', (req, res) => {
    res.json(cityData);
});

// Define an API endpoint to get a specific city by name
app.get('/cities/:name', (req, res) => {
    const cityName = req.params.name;
    const city = cityData.find(city => city.Name === cityName);
    if (city) {
        res.json(city);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(port, () => {
    console.log(`API is listening on port ${port}`);
});
