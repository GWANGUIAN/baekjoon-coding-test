let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0]);
  const sanggeun = input[1].split(" ").slice(0, N);
  const M = Number(input[2]);
  const target = input[3].split(" ").slice(0, M);

  const set = new Set();
  sanggeun.forEach((key) => {
    set[key] = 1;
  });
  const result = [];
  target.forEach((key) => {
    if (set[key] === 1) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  console.log(result.join(" "));
}

solution();

// 메모리: 191676KB	시간:1092ms
