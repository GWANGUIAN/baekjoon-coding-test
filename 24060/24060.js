let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [N, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").slice(0, N).map(Number);
let count = 0;
let target = -1;

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    count++;
    if (count === k) {
      target = result[result.length - 1];
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
    count++;
    if (count === k) {
      target = result[result.length - 1];
    }
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
    count++;
    if (count === k) {
      target = result[result.length - 1];
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const sortedArr = mergeSort(arr);

console.log(sortedArr);
console.log(target);
