let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 5! = 5 * ... * 1 : 5개수 1개
// 10! = 10(5 * 2) * ... * 5 ... 1 : 5개수 2개
// 15! = 15(5 * 3) * ... * 10(5 * 2) * ... * 5 ... 1 : 5개수 3개
// 20! = 20(5 * 4) * ... * 15(5 * 3) * ... * 10(5 * 2) * ... * 5 ... 1 : 5개수 4개
// 25! = 25(5 * 5) * ... * 20(5 * 4) * ... * 15(5 * 3) * ... * 10(5 * 2) * ... * 5 ... 1 : 5개수 6개

// 25/5 = 5
// 5/5 = 1
// 5 + 1 = 6

// 55/5 = 11
// 11/5 = 2
// 11 + 2 = 13


function getNumOfFactorOfFactorial (num, factor) {
  let count = 0;
  while (num > 0) {
    count += Math.floor(num / factor);
    num /= factor;
  }
  return count;
}

function solution () {
  const n = Number(input[0]);
  //const two = getNumOfFactorOfFactorial(n, 2);
  const five = getNumOfFactorOfFactorial(n, 5);

  // console.log(Math.min(two, five));
  console.log(five);
}

solution();
//메모리: 9392KB, 시간: 132ms(two, five 모두 구함)
//메모리: 9356KB, 시간: 132ms(five만 구함)