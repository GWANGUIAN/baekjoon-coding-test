let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const obj = {};
  for (let i = 1; i <= N; i++) {
    obj[input[i]] = i;
    obj[i] = input[i];
  }
  for (let i = N + 1; i <= N + M; i++) {
    if (obj[input[i]] !== undefined) {
      console.log(obj[input[i]]);
    }
  }
}

solution();
