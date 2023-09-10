let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function getGcd(a, b) {
  return b === 0 ? a : getGcd(b, a % b);
}

function solution() {
  const n = Number(input[0]);
  const circles = input[1].split(" ").map(Number);

  for (let i = 1; i < n; i++) {
    const gcd = getGcd(circles[0], circles[i]);
    console.log(circles[0] / gcd + "/" + circles[i] / gcd);
  }
}

solution();
