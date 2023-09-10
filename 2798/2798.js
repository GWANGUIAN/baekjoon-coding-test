let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

function solution() {
  const cardNum = input[0].split(" ").map(Number)[0];
  const targetNum = input[0].split(" ").map(Number)[1];
  const arr = input[1].split(" ").slice(0, cardNum).map(Number);

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sum <= targetNum && sum > result) {
          result = sum;
        }
      }
    }
  }

  console.log(result);
}

solution();
