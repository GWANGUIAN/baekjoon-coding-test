let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function isContain(x, y, circle) {
  return (
    Math.pow(x - circle[0], 2) + Math.pow(y - circle[1], 2) <
    Math.pow(circle[2], 2)
  );
}

function isCount(x1, y1, x2, y2, circle) {
  const isStartPointContain = isContain(x1, y1, circle);
  const isFinishPointContain = isContain(x2, y2, circle);

  return isStartPointContain === !isFinishPointContain;
}

function solution() {
  const numOfTest = Number(input.shift());

  for (let i = 0; i < numOfTest; i++) {
    const points = input.shift().split(" ").map(Number);
    const numOfCircle = input.shift();
    const circles = input
      .splice(0, numOfCircle)
      .map((circle) => circle.split(" ").map(Number));

    const inAndOut = circles.reduce((acc, circle) => {
      return isCount(...points, circle) ? acc + 1 : acc;
    }, 0);

    console.log(inAndOut);
  }
}

solution();
