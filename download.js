const fs = require('fs');
const path = require('path');
const http = require('http');

const urls = [
  "http://localhost:3845/assets/04ddacf58a1860b0117bea1d45a1beb8b1e36f9d.png",
  "http://localhost:3845/assets/f00367799970e6a8aef53d027aeefc094bc2caee.png",
  "http://localhost:3845/assets/90eaa271ccee7d1a962492b16a80dda84d1f15d0.png",
  "http://localhost:3845/assets/52c1910afac3f17007a85560b7a86eee215b7dfe.svg",
  "http://localhost:3845/assets/92df050170cead17ecf8f7c73f9eef77065b0162.svg",
  "http://localhost:3845/assets/9209b4894525fd981f271e0d266e8a1351ea4773.svg"
];

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)){
    fs.mkdirSync(assetsDir);
}

urls.forEach(url => {
  const filename = path.basename(url);
  const filepath = path.join(assetsDir, filename);
  const file = fs.createWriteStream(filepath);
  http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
    });
  });
});
console.log('Downloading new team assets...');
