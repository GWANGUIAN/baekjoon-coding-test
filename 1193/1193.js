let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

let num = Number(input[0]);

function solution() {
  let sum = 0;
  let line = 1;

  while (true) {
    sum += line;
    if (sum >= num) {
      let a = line - (sum - num);
      let b = line + 1 - a;
      if (line % 2 === 0) {
        console.log(`${a}/${b}`);
      } else {
        console.log(`${b}/${a}`);
      }
      break;
    }
    line++;
  }
}

solution();
