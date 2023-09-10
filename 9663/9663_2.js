let fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution () {
  const N = Number(input[0]);

  const chessboard = Array.from({length: N}, () => Array(N).fill(0));
  let count = 0;

  function check (row, col) {
    for (let i = 0; i < col; i++) {
      if (chessboard[row][i] === 1) return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (chessboard[i][j] === 1) return false;
    }

    for (let i = row + 1, j = col - 1; i < N && j >= 0; i++, j--) {
      if (chessboard[i][j] === 1) return false;
    }
    return true;
  }

  function dfs (col) {
    if (col === N) {
      count++;
      return;
    }

    for (let row = 0; row < N; row++) {
      if (check(row, col)) {
        chessboard[row][col] = 1;
        dfs(col + 1);
        chessboard[row][col] = 0;
      }
    }
  }

  dfs(0);

  console.log(count);

}

solution();