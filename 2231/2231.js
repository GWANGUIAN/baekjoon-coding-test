let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

function solution() {
  const N = Number(input[0]);
  let M = 0;
  let result = 0;
  while (M < N) {
    const arr = M.toString().split("").map(Number);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    if (sum + M === N) {
      result = M;
      break;
    }
    M++;
  }

  console.log(result);
}

solution();
