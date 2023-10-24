const fs = require('fs');

// Read the contents of your cities.txt file
const rawData = fs.readFileSync('./cities.txt', 'utf8');

// Function to parse and fix the data
function fixCityData(data) {
  // Split the data into lines
  const lines = data.trim().split('\n');
  const fixedData = [];

  lines.forEach((line) => {
    // Replace single quotes around key-value pairs
    const fixedLine = line.replace(/'([^']+)':/g, (_, match) => `"${match}":`);
    fixedData.push(fixedLine);
  });

  return fixedData.join('\n');
}

// Fix and save the data
const fixedData = fixCityData(rawData);
fs.writeFileSync('./fixedCities.txt', fixedData, 'utf8');
console.log('Fixed data saved to fixedCities.txt');