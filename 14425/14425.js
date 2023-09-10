let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);
  const setS = {};
  for (let i = 1; i <= N; i++) {
    setS[input[i]] = 1;
  }
  let count = 0;
  for (let i = N + 1; i <= N + M; i++) {
    if (setS[input[i]] === 1) {
      count++;
    }
  }

  console.log(count);
}

solution();
