let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

input.shift();

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
  for (let num of input) {
    num = Number(num);
    const temp = [];
    for (let i = 2; i <= num / 2; i++) {
      if (isPrime(i) && isPrime(num - i)) {
        temp.push(i);
      }
    }
    const answer = temp[temp.length - 1];
    result.push(`${answer} ${num - answer}`);
  }
  console.log(result.join("\n"));
}

solution();
