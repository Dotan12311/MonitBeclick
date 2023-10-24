const fs = require('fs');

try {
  // Read the data from the file
  const data = fs.readFileSync('all-data.txt', 'utf8');

  // Attempt to parse the data as JSON
  const allCityData = JSON.parse(data);

  // If parsing is successful, you can work with the JSON data
  console.log('Parsed JSON data:', allCityData);
  
  // Write the JSON data to a new file (data.json)
  fs.writeFileSync('data.json', JSON.stringify(allCityData, null, 2), 'utf8');
  console.log('Data written to data.json');
} catch (error) {
  // Handle any errors that occur during the process
  console.error('Error:', error.message);
}
