let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

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
  for (const num of input) {
    if (num === "0") break;
    let primeNum = 0;
    const min = Number(num) + 1;
    const max = Number(num) * 2;

    for (let i = min; i <= max; i++) {
      if (isPrime(i)) {
        primeNum++;
      }
    }
    result.push(primeNum);
  }
  console.log(result.join("\n"));
}

solution();
