const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, 'websitefiles')));
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data.json');

if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, '[]');
}

app.get('/data.json', (req, res) => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading data file:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/data.json', (req, res) => {
  try {
      const existingData = fs.existsSync(dataFilePath) ? JSON.parse(fs.readFileSync(dataFilePath, 'utf8')) : [];
      const newData = req.body;

      // Check if the new data has a valid name
      if (!newData || !newData.Name) {
          console.error('Invalid data: Name is undefined or empty');
          res.status(400).send('Invalid data: Name is undefined or empty');
          return;
      }

      // Use a map to keep track of entries by their names
      const dataMap = new Map(existingData.map(entry => [entry.Name.toLowerCase(), entry]));

      // Check if an entry with the same name already exists (case-insensitive)
      const existingEntry = dataMap.get(newData.Name.toLowerCase());

      if (existingEntry) {
          // Update the existing entry
          Object.assign(existingEntry, newData);
      } else {
          // Add a new entry
          existingData.push(newData);
      }

      fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
      res.sendStatus(200);
  } catch (error) {
      console.error('Error updating data file:', error.message);
      res.status(500).send('Internal Server Error');
  }
});








app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
