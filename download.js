const fs = require('fs');
const path = require('path');
const http = require('http');

const urls = [
  "http://localhost:3845/assets/0773b9228c16deabe9b06d7a225da792a33a8c28.png",
  "http://localhost:3845/assets/6dd13b84058ae2f9cd11b9f42c1407a48aa65dc2.png",
  "http://localhost:3845/assets/f631edb53bdd7a27237a1803ee45338c99ec62ea.png",
  "http://localhost:3845/assets/52209dc4dde8548bcb30d1c5bbeab3141d61b8be.png",
  "http://localhost:3845/assets/5ad0f90a86c00191deb81855192d933af8d1286d.png",
  "http://localhost:3845/assets/452143feaeb3fe1c92af6db4dbda4a4f2d5ba1f2.png",
  "http://localhost:3845/assets/147b370690d2a325e850018cba5e20ef5ef6c9c1.png",
  "http://localhost:3845/assets/eb248add6092349ed749a09a82cded8e3adc57aa.png",
  "http://localhost:3845/assets/bb2d66f04fbebf0f33d800a53b6ff8e437def2f0.png",
  "http://localhost:3845/assets/645edea9b72dad5d141c317a2c93217056d8bc71.png",
  "http://localhost:3845/assets/e24b43c8723f03f35e2521874c37699974aeeafe.png",
  "http://localhost:3845/assets/6e94ce756b3616237158fdd853f3e3c4231faa94.png",
  "http://localhost:3845/assets/c831f95cf5d1685432e6d17a216c6da264324fe8.png",
  "http://localhost:3845/assets/f17679554c052c469815d831b3e98aaa7bb763b7.png",
  "http://localhost:3845/assets/f1b13951a0cc73b2ca8febee6d7815320dd03bef.png",
  "http://localhost:3845/assets/19b06611d3c52ca1de4eae5e00c86f79f06028d0.svg",
  "http://localhost:3845/assets/28abc0c92240313b6055e2465d62ca4bf67bbaf2.svg",
  "http://localhost:3845/assets/f06c490498e6da387364efa565e19d2733970b44.svg",
  "http://localhost:3845/assets/057604273d338b5a5dac9945be0fc5c990e36830.svg",
  "http://localhost:3845/assets/fb48f9b9968a0d6d5a0312945d315842e8b8eb1e.svg",
  "http://localhost:3845/assets/5c229d0a365f92bd5506f16cac52323573aaaa65.svg",
  "http://localhost:3845/assets/61a35f6481a9813a54b1b77d275d8791fe1ab130.svg",
  "http://localhost:3845/assets/c85e52b7eba225b94c1f4e356cf532b2be033561.svg",
  "http://localhost:3845/assets/4c36a6bb75f8759996b5936b01f322f42f25cf61.svg",
  "http://localhost:3845/assets/543a6762f60950fe3e85e857b11b350e498f0f59.png"
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
