let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync("./example.txt").toString().split(" ");

input = Number(input[0]);

function solution() {
  let result = -1;
  let five = Math.floor(input / 5);
  while (five >= 0) {
    const rest = input - five * 5;
    if (rest % 3 === 0) {
      result = rest / 3 + five;
      break;
    } else {
      five--;
    }
  }
  console.log(result);
}

solution();
