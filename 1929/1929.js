let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().split(" ");

let min = Number(input[0]);
let max = Number(input[1]);

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }
  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
}

function solution() {
  const result = [];
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result.join("\n"));
}

solution();
