let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

const insertionSort = function (arr) {
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= sorted[i - 1]) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (arr[i] <= sorted[j]) {
          const left = sorted.slice(0, j);
          const right = sorted.slice(j);
          sorted = [...left, arr[i], ...right];
          break;
        }
      }
    }
  }

  return sorted;
};

function solution() {
  const N = Number(input[0]);
  const arr = input.slice(1, N + 1).map(Number);

  const sorted = insertionSort(arr);
  console.log(sorted.join("\n"));
}

solution();
