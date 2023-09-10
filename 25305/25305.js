let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

const bubbleSort = function (arr) {
  let temp = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let breakcheck = 0;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        breakcheck++;
      }
    }
    if (breakcheck === 0) break;
  }
  return arr;
};

function solution() {
  const [N, k] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").slice(0, N).map(Number);
  const sorted = bubbleSort(arr);
  console.log(sorted[N - k]);
}

solution();
