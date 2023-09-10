let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

function solution() {
  const whites = Array.from({ length: 100 }, () => Array(100).fill(0));
  const blacks = input
    .slice(1, Number(input[0]) + 1)
    .map((row) => row.split(" ").map(Number));
  let count = 0;
  for (const black of blacks) {
    for (let i = black[0] - 1; i < black[0] + 9; i++) {
      for (let j = black[1] - 1; j < black[1] + 9; j++) {
        if (whites[i][j] === 0) {
          count++;
        }
        whites[i][j] = 1;
      }
    }
  }
  console.log(count);
}

solution();
