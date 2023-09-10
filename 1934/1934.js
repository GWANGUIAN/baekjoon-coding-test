let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function getGcd(a, b) {
  return b === 0 ? a : getGcd(b, a % b);
}

function getLcm(n, m) {
  return (n * m) / getGcd(n, m);
}

function solution() {
  const n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    console.log(getLcm(a, b));
  }
}

solution();
