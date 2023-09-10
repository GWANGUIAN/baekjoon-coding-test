let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const r = Number(input[0]);

  const euclidArea = Math.PI * Math.pow(r, 2);
  const taxiArea = Math.pow(2 * r, 2) / 2;

  console.log(euclidArea.toFixed(6));
  console.log(taxiArea.toFixed(6));
}

solution();
