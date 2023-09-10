let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const factorial = (num) => {
  var bigInt = BigInt(num);
  var factorial = BigInt(1);
  for (let i = BigInt(0); i < bigInt ; i++) {
     factorial *= bigInt - i;
  }
  return factorial;
}


//조합 공식
// nCr = n! / (n-r)! * r!
function solution () {
  const [n, r] = input[0].split(' ').map(Number);
  const combinationBigInt = factorial(n) / (factorial(n-r) * factorial(r));
  const combination = combinationBigInt.toString();

  let count = 0;
  for(let i = combination.length - 1; i >= 0; i--) {
    if (combination[i] === '0') {
      count++;
    } else {
      console.log(count);
      break;
    }
  }
}

solution();
//메모리 초과