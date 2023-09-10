let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function getPermutation (arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]); 

  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index+1)] 
    const permutation = getPermutation(rest, selectNum - 1); 
    const attached = permutation.map((el) => [fixed, ...el]); 
    results.push(...attached); 
  });

  return results;
} 

function solution () {
  const [arrLength, selectNum] = input[0].split(' ').map(Number);
  const arr = Array.from({length: arrLength}, (_, i) => i+1);
  const result = getPermutation(arr, selectNum);

  result.forEach((el) => console.log(el.join(' ')));
}

solution();