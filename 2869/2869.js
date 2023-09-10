let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let v = Number(input[2]);

function solution() {
  const day = Math.ceil((v - b) / (a - b));

  console.log(day);
}

solution();
