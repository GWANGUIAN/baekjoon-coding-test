let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync("./example.txt").toString().split("\n");

const compare = (i, j, people, rankArr) => {
  if (people[i][0] > people[j][0] && people[i][1] > people[j][1]) {
    rankArr[j]++;
  } else if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
    rankArr[i]++;
  }
};

function solution() {
  const num = Number(input[0]);
  const people = input.slice(1, num + 1).map((v) => v.split(" ").map(Number));
  const rankArr = Array.from({ length: num }, () => 1);

  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      compare(i, j, people, rankArr);
    }
  }

  console.log(rankArr.join(" "));
}

solution();
