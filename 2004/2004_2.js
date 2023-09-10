let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 조합 공식
// nCr = n! / (n-r)! * r!

function getNumOfFactorOfFactorial (num, factor) {
  let count = 0;
  while (num > 0) {
    count += Math.floor(num / factor);
    num /= factor;
  }
  return count;
}

function solution () {
  const [n, r] = input[0].split(' ').map(Number);
  let two = 0;
  let five = 0;

  two += getNumOfFactorOfFactorial(n, 2);
  two -= getNumOfFactorOfFactorial(n-r, 2);
  two -= getNumOfFactorOfFactorial(r, 2);

  five += getNumOfFactorOfFactorial(n, 5);
  five -= getNumOfFactorOfFactorial(n-r, 5);
  five -= getNumOfFactorOfFactorial(r, 5);

  console.log(Math.min(two, five));
}

solution();