let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

let a = BigInt(input[0]);
let b = BigInt(input[1]);

function solution() {
  console.log((a + b).toString());
}

solution();
