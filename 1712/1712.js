let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

function solution() {
  const bep = Math.floor(a / (c - b)) + 1;
  console.log(b >= c ? -1 : bep);
}

solution();
