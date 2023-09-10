let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function getCombination (arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]); 

  arr.forEach((fixed, index) => {
    const rest = arr.slice(index+1);
    const combination = getCombination(rest, selectNum - 1); 
    const attached = combination.map((el) => [fixed, ...el]); 
    results.push(...attached); 
  });

  return results;
} 

function solution () {
  const [arrLength, selectNum] = input[0].split(' ').map(Number);
  const arr = Array.from({length: arrLength}, (_, i) => i+1);
  const result = getCombination(arr, selectNum);

  result.forEach((el) => console.log(el.join(' ')));
}

solution();