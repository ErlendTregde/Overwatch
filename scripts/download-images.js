const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');

// Load the JSON file with character data
const heroes = JSON.parse(fs.readFileSync('./heroes.json', 'utf-8'));

// Create a directory to save images
const imageDir = './images';
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir);
}

// Download images
async function downloadImages() {
  for (const hero of heroes) {
    const response = await fetch(hero.portrait);
    const buffer = await response.buffer();
    const filePath = path.join(imageDir, `${hero.key}.png`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Downloaded: ${hero.name}`);
  }
}

downloadImages();
