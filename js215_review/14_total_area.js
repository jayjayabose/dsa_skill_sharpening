/*
I: rectangle [][]int
O: int, area of all rectables
rules
- all non-negative?
- two ints in each
- not emppty?

approach reduce



*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
function totalArea(shapes) {
  return shapes.reduce((area, [height, width]) => {
    return area + height * width;
  }, 0)
}

function totalSquareArea(shapes) {
  const squares = shapes.filter(([height, width]) => height === width);
  return totalArea(squares);
}

console.log(totalArea(rectangles) === 141);    // 141

console.log(totalSquareArea(rectangles) === 121);    // 121
