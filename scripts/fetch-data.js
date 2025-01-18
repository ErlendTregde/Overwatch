const fs = require('fs');
const fetch = require('node-fetch');

// Fetch character data
async function fetchOverwatchData() {
  const response = await fetch('https://overfast-api.tekrop.fr/heroes');
  const data = await response.json();

  // Save data to heroes.json
  fs.writeFileSync('heroes.json', JSON.stringify(data, null, 2));
  console.log('Data saved to heroes.json');
}

fetchOverwatchData();
