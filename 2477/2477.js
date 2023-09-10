let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const numOfMelon = Number(input[0]);
  const routes = input.slice(1, 7).map((values) => {
    const arr = values.split(" ").map(Number);
    return {
      direction: arr[0],
      length: arr[1],
    };
  });

  const wholeSquare = routes.reduce(
    (acc, route, index) => {
      if (
        (route.direction === 1 || route.direction === 2) &&
        route.length > acc[0].length
      ) {
        return [{ index, length: route.length }, acc[1]];
      } else if (
        (route.direction === 3 || route.direction === 4) &&
        route.length > acc[1].length
      ) {
        return [acc[0], { index, length: route.length }];
      }

      return acc;
    },
    [
      { index: 0, length: 0 },
      { index: 0, length: 0 },
    ]
  );

  const blankSquareIndexs = [
    (wholeSquare[0].index + 3) % 6,
    (wholeSquare[1].index + 3) % 6,
  ];

  const wholeSquareArea = wholeSquare[0].length * wholeSquare[1].length;
  const blankSquareArea =
    routes[blankSquareIndexs[0]].length * routes[blankSquareIndexs[1]].length;

  console.log((wholeSquareArea - blankSquareArea) * numOfMelon);
}

solution();
