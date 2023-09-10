let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const N = Number(input[0]);
  const sanggeun = input[1].split(" ").slice(0, N).map(Number);
  const M = Number(input[2]);
  const target = input[3].split(" ").slice(0, M).map(Number);

  const arr = [];
  sanggeun.forEach((index) => {
    arr[index] = 1;
  });
  const result = [];
  target.forEach((index) => {
    if (arr[index] === 1) {
      result.push(1);
    } else {
      result.push(0);
    }
  });

  console.log(result.join(" "));
}

solution();

//시간초과
