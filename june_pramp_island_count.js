/*
problem
i: matrix, 
o: number of islands
rules
 island  group of adjacent values that are all 1s. 
 adjacence - same row, or sam col, not diagonal
 matrix: at least one element
  all values 0 or 1


total islands: 2

examples
input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.
data

approach
  init islandCount: 0

  iterate through elements in matrix
    if 1
        increment islandCount
        zero out this cell
        zeroOutSurroundingOnes(row, col)        


func: zeroOutCellAndAdjacent(row, col)
  zero out row, col
  
  init: leftCellExists
  init: rightCellExists
  init: aboveCellExists
  init: belowCellExists
  

  // base case: no adjacent 1s
  IF
  // left
   ! leftCellExists or left is not 1
  and
  //  right 
  col is max or element to right is not 1
  and
  // top
  row is zero or element above is not 1
  and
  // bottom
  row is max or element below is not 1
 
  THEN  return

  // recursive case

  if leftCellExists and cell == 1,  zeroOutCellAndAdjacent(row, col - 1) // left
  if leftCellExists and cell == 1,  zeroOutCellAndAdjacent(row, col - 1) // right
  if leftCellExists and cell == 1,  zeroOutCellAndAdjacent(row, col - 1) // up
  if leftCellExists and cell == 1,  zeroOutCellAndAdjacent(row, col - 1) // down
  */

function getNumberOfIslands(binaryMatrix) {
  const lastRowIdx = binaryMatrix.length - 1;
  const lastColIdx = binaryMatrix[0].length - 1;
  let islandCount = 0;
  
  for (let row = 0; row < binaryMatrix.length; row++) {
    for (let col = 0; col < binaryMatrix[0].length; col++) {
      let cell = binaryMatrix[row][col];
      if (cell === 1) {
        islandCount += 1;
        zeroOutCellAndAdjacent(row, col)
      }
    }
  }
  
  return islandCount;
  
  function zeroOutCellAndAdjacent(row, col) {
    // zero out cell
    binaryMatrix[row][col] = 0;
    
    const leftCellExists = col > 0;
    const rightCellExists = col < lastColIdx;
    const upCellExists = row > 0;
    const downCellExists = row < lastRowIdx;
    
    // base case no surrounding 1s
    if ((!leftCellExists || binaryMatrix[row][col - 1] !== 1) &&
      (!rightCellExists || binaryMatrix[row][col + 1] !== 1) &&
      (!upCellExists || binaryMatrix[row - 1][col] !== 1) &&
      (!downCellExists || binaryMatrix[row + 1][col] !== 1)) {
      return
    }
    // base case: no surrounding 1s    
    if (leftCellExists && binaryMatrix[row][col - 1] === 1) zeroOutCellAndAdjacent(row, col - 1);
    if (rightCellExists && binaryMatrix[row][col + 1] === 1) zeroOutCellAndAdjacent(row, col + 1);
    if (upCellExists && binaryMatrix[row - 1][col] === 1) zeroOutCellAndAdjacent(row - 1, col);
    if (downCellExists && binaryMatrix[row + 1][col] === 1) zeroOutCellAndAdjacent(row + 1, col);   
  }

  zeroOutCellAndAdjacent(0,3)
}
  
binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]


console.log(getNumberOfIslands(binaryMatrix))