let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution () {
  const n = Number(input.shift());

  for(let i = 0; i < n; i++) {
    const numOfClothes = Number(input.shift());
    const clothes = input.splice(0, numOfClothes).map(cloth => cloth.split(' ')[1]);

    const clothesObj = clothes.reduce((acc, cloth) => {
      acc[cloth] = acc[cloth] ? acc[cloth] + 1 : 2;
      return acc;
    }, {})

    const result = Object.values(clothesObj).reduce((acc, value) => acc * value, 1) - 1;

    console.log(result);
  }
}

solution();