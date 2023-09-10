let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

let numOfRoom = Number(input[0]);

function solution() {
  let numOfPassing = 1;
  let maxNum = 1;
  while (maxNum < numOfRoom) {
    maxNum += 6 * numOfPassing;
    numOfPassing++;
  }
  console.log(numOfPassing);
}

solution();
