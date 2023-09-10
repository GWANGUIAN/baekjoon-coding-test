let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

let num = Number(input[0]);

function solution() {
  const result = [];
  for (let i = 2; i <= num; i++) {
    while (input % i === 0) {
      num = num / i;
      result.push(i);
    }
  }
  console.log(result.join("\n"));
}

solution();
