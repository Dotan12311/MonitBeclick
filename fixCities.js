const fs = require('fs');

// Read the contents of your cities.txt file
fs.readFile('./cities.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading cities.txt:', err);
    return;
  }

  // Function to parse and fix the data
  function fixCityData(data) {
    // Split the data into lines
    const lines = data.trim().split('\n');
    const fixedData = [];

    lines.forEach((line) => {
      // Replace single quotes around key-value pairs
      const fixedLine = line.replace(/'([^']+)':/g, (_, match) => `"${match}":`);
      const wrappedLine = `{${fixedLine}}`; // Wrap each line in curly braces
      fixedData.push(wrappedLine);
    });

    return `[${fixedData.join(',')}]`; // Create a valid JSON array
  }

  // Fix the data
  const fixedData = fixCityData(data);

  // Save the fixed data to a new file called fixedCities.json
  fs.writeFile('./fixedCities.json', fixedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing fixedCities.json:', err);
    } else {
      console.log('Fixed data saved to fixedCities.json1');
    }
  });
});
