let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

const quickSort = function (arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  let leftArr = quickSort(left);
  let rightArr = quickSort(right);
  return [...leftArr, pivot, ...rightArr];
};

function solution() {
  const arr = input.slice(0, 5).map(Number);
  const sorted = quickSort(arr);
  const average = sorted.reduce((acc, cur) => acc + cur) / 5;
  const middle = sorted[2];

  console.log(average);
  console.log(middle);
}

solution();
