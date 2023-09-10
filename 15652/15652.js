let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution () {
  const [maxNum, selectNum] = input[0].split(' ').map(Number);
  const arr = Array.from({length: selectNum}, () => 1);
  const result = [];

  while (true) {
    result.push(arr.join(' '));

    let i = selectNum - 1;
    while (i >= 0 && arr[i] === maxNum) i--;

    if (i < 0) break;

    arr[i] += 1;
    for (let j = i + 1; j < selectNum; j++) {
      arr[j] = arr[i];
    }
  }
  
  console.log(result.join('\n'));
}

solution();