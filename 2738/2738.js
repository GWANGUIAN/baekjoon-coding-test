let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

function solution() {
  const n = Number(input[0].split(" ")[0]);
  const m = Number(input[0].split(" ")[1]);
  for (let i = 1; i <= n; i++) {
    if (i > n) break;
    const row1 = input[i].split(" ").map(Number).slice(0, m);
    const row2 = input[i + n].split(" ").map(Number).slice(0, m);
    const result = row1.map((v, i) => v + row2[i]);
    console.log(result.join(" "));
  }
}

solution();
