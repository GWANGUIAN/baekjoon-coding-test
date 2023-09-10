let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const factorial = (num) => {
  var bigInt = BigInt(num);
  var factorial = BigInt(1);
  for (let i = BigInt(0); i < bigInt ; i++) {
     factorial *= bigInt - i;
  }
  return String(factorial);
}

function solution () {
  const n = Number(input[0]);
  const factorialNum = factorial(n);

  let count = 0;
  for(let i = factorialNum.length - 1; i >= 0; i--) {
    if (factorialNum[i] === '0') {
      count++;
    } else {
    console.log(count);
    break;
    }
  }
}

solution();
//메모리: 9488KB, 시간: 132ms