let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

function solution() {
  const flatArr = input.map((row) => row.split(" ").map(Number)).flat();
  const max = Math.max(...flatArr);
  console.log(max);
  const rowNumber = flatArr.indexOf(max) % 9;
  const colNumber = Math.floor(flatArr.indexOf(max) / 9);
  console.log(`${colNumber + 1} ${rowNumber + 1}`);
}

solution();
