const fs = require('fs');
const path = require('path');
const http = require('http');

const urls = [
  "http://localhost:3845/assets/04ddacf58a1860b0117bea1d45a1beb8b1e36f9d.png",
  "http://localhost:3845/assets/f00367799970e6a8aef53d027aeefc094bc2caee.png",
  "http://localhost:3845/assets/90eaa271ccee7d1a962492b16a80dda84d1f15d0.png",
  "http://localhost:3845/assets/52c1910afac3f17007a85560b7a86eee215b7dfe.svg",
  "http://localhost:3845/assets/92df050170cead17ecf8f7c73f9eef77065b0162.svg",
  "http://localhost:3845/assets/9209b4894525fd981f271e0d266e8a1351ea4773.svg",
  "http://localhost:3845/assets/6e94ce756b3616237158fdd853f3e3c4231faa94.png",
  "http://localhost:3845/assets/4c36a6bb75f8759996b5936b01f322f42f25cf61.svg",
  "http://localhost:3845/assets/0f5c1de73b6f6106150dd583d5f68030591062e5.png",
  "http://localhost:3845/assets/3e3a604d1bd790d6f71a1aa79a312eb55eeb90b3.png",
  "http://localhost:3845/assets/543a6762f60950fe3e85e857b11b350e498f0f59.png",
  "http://localhost:3845/assets/e24b43c8723f03f35e2521874c37699974aeeafe.png",
  "http://localhost:3845/assets/0db8ee00f841c1a4d73f439235c188c990d31b74.png",
  "http://localhost:3845/assets/08d0e38753e40133297ec7baf056feb76902c6db.png",
  "http://localhost:3845/assets/ff30c8f0ad429ba9806da89dfd8c26ec9ca79576.png",
  "http://localhost:3845/assets/c4fcc49d529c900acb2fa9d8979faa7a58f330dd.png",
  "http://localhost:3845/assets/0ff1df46b4c678da892bcd18316c9ffc3228aff6.png",
  "http://localhost:3845/assets/99226b4a8e0f1d6fab371812a6b1d540692d76a8.png",
  "http://localhost:3845/assets/75484bb5bf83f4497d686b1134157f14a152d9fc.png",
  "http://localhost:3845/assets/7b08612e9f0141479c3007f3ac379183df6f0e6b.png",
  "http://localhost:3845/assets/63467bdc56bd4790c4f66187277db30922817a37.png",
  "http://localhost:3845/assets/659dbe9e403d3c29e346c2e5e92b3bb9619fe875.png",
  "http://localhost:3845/assets/981a7edbcd268379f420bd9b40d620fa2efb7d45.png",
  "http://localhost:3845/assets/0651afc535155f71f9658d27788e2fa9156295b1.png",
  "http://localhost:3845/assets/6fa8c30a839b8f2dfae288579aa6be91eb4a31f9.svg",
  "http://localhost:3845/assets/c31c5b6fe7ed250745d48049320b2f43e3fc1b10.svg",
  "http://localhost:3845/assets/3f9572f7a1e01d085c5cf55efbc9a6c4448af354.svg",
  "http://localhost:3845/assets/61a35f6481a9813a54b1b77d275d8791fe1ab130.svg",
  "http://localhost:3845/assets/c85e52b7eba225b94c1f4e356cf532b2be033561.svg",
  "http://localhost:3845/assets/4c36a6bb75f8759996b5936b01f322f42f25cf61.svg"
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
