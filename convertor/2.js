const fs = require('fs');

fs.readFile('all-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err.message}`);
    return;
  }

  const lines = data.split('\n');
  const allCityData = [];

  lines.forEach((line) => {
    const cityData = {};
    const parts = line.split(',');

    if (parts.length >= 8) {
      cityData.Name = parts[0].trim();
      cityData.NameE = parts[1].trim();
      cityData.PriceDayTo = parseInt(parts[2].trim());
      cityData.PriceNightTo = parseInt(parts[3].trim());
      cityData.PriceDayFrom = parseInt(parts[4].trim());
      cityData.PriceNightFrom = parseInt(parts[5].trim());

      allCityData.push(cityData);
    }
  });

  const json = JSON.stringify(allCityData, null, 2);

  fs.writeFile('data.json', json, (err) => {
    if (err) {
      console.error(`Error writing the JSON file: ${err.message}`);
      return;
    }
    console.log('Data has been successfully converted and saved to data.json');
  });
});
