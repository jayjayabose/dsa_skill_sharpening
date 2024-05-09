// https://leetcode.com/problems/search-a-2d-matrix/
// good: 20 minutes.  i know the algo, but i was able to code the solution with almost no problem
/*
PROBLEM:
I: matrix, 2d array of ints
 - at least 1 x 1
I: target, int -- number to find
O: bool, true if target is in matrix
Rules
- in a row, nums are sorted non-creasing
- in the matrix, rows are sorted -- first num of each row > last of prev

EXAMPLES

[
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
    ], 
target = 3; true


[
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
    ], 

target = 13, true

concat + bin search: M + nm(log nm)
bin serach + bin search: nLogn + mLogn

ALGO
# bin search to find index of row that may contain target
    [0]. <= t <=[l -1]

    return false if not found

# bin search in row to target
    if found return true

retur ralse

 */

const p = (...args) => console.log(...args);

function searchMatrix(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;
    let candidateRowIdx = null;

    while (left <= right) {
        let midIdx = Math.floor((left + right) / 2);
        let midRow = matrix[midIdx];
        
        if (target < midRow[0]) {
            right = midIdx - 1;
        } else if (target > midRow[midRow.length - 1]) {
            left = midIdx + 1;
        } else {
            candidateRowIdx = midIdx;
            break;
        }
    }

    if (candidateRowIdx === null) {
        return false;
    }

    let candidateRow = matrix[candidateRowIdx];
    left = 0;
    right = candidateRow.length - 1;

    while (left <= right) {
        let midIdx = Math.floor((left + right) / 2);
        let midVal = candidateRow[midIdx];

        if (target < midVal) {
            right = midIdx - 1;
        } else if (target > midVal) {
            left = midIdx + 1;
        } else {
            return true;;
        }

    }
    return false;
}

/*

I: 
- matrix
- target
O:
- boolean, true if target is in matrix


example
Input: matrix = 
[[1,3,5,7],
[10,11,16,20],
[23,30,34,60]], target = 3
Output: true



mental model


helper: indexOfQualifiedRow(matrix, target)
i: matrix
o: index of row holding value, -1 if not found

INIT: midIndex
INIT: left, right
LOOP while left < right
 
    IF target is less than [0]
        go left
    IF target is greater than []lenght -1], 
        go right
    Else
        return midIndex
END LOOP

return -1


helper: isInRow(rowIndex, target)
o: boolean - true if targe is find


ALGO
let i = indexOfQualifiedRow(matrix);
IF i is -1, return false
return isInRow(matrix[i]);


*/


/*
4/10/24 practice
I: 
 matrix int[][]
 target: number
O: bool, true if target is in matrix

*/

// function searchMatrix(matrix, target) {
//     let left = 0;
//     let right = matrix.length - 1;
//     let rowIdx = null;
    
//     while (left <= right) {
//         let mid = Math.floor((right + left)/2)
//         let row = matrix[mid];
//         if (target < row[0]) {
//             right = mid - 1;
//         } else if (target > row[row.length - 1]) {
//             left = mid + 1;
//         } else {
//             rowIdx = mid;
//             break;
//         }
//     }
//     if (rowIdx === null) {
//         return false;
//     }
//     left = 0;
//     right = matrix[rowIdx].length - 1;
//     let foundRow = matrix[rowIdx];

//     while (left <= right) {
//         let midIdx = Math.floor((left + right) / 2);
//         let midVal = foundRow[midIdx];

//         if (target < midVal) {
//             right = midIdx - 1;
//         } else if (target > midVal) {
//             left = left + 1;
//         } else {
//             return true;
//         }
//     }
//     return false;
// }


// solution
// function searchMatrix(matrix, target) {
//     let left = 0;
//     let right = matrix.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let row = matrix[mid];

//         if (target < row[0]) {
//             right = mid -1;
//         } else if (target > row[row.length -1]) {
//             left = mid + 1;
//         } else {
//         // if (row[0] <= target && target <= row[row.length - 1]) {
//             return row.indexOf(target) === -1 ? false : true
//         } 
//     }
//         return false;
// }



// solution
// var searchMatrix = function(matrix, target) {
//     let rowIdx = indexOfQualifedRow(matrix, target);
//     console.log('rowIdx', rowIdx, matrix[rowIdx].indexOf(target))
//     if (rowIdx === -1) {
//         return false
//     }
//     return matrix[rowIdx].indexOf(target) !== -1;
// }

// function indexOfQualifedRow(matrix, target) {
//     let left = 0;
//     let right = matrix.length -1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2)
//         console.log(mid, matrix[mid]);
//         if (target < matrix[mid][0]) {
//             right = mid -1;
//         } else if (target > matrix[mid][matrix.length -1]) {
//             left = mid + 1
//         } else {
//             return mid
//         }
//     }
//     return -1
// }



///
// find middle array
// find middle element 

// if elemnt === target
//     retuen turne
// if element < target
//     //go right
// if element > target
//     //go left

 
// var searchMatrix = function(matrix, target) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     let top = 0;
//     let bottom = rows - 1;
//     let row;

//     while (top <= bottom) {
//         row = Math.floor((top + bottom) / 2);
//         if (target > matrix[row][cols - 1]) {
//             top = row + 1;
//         } else if (target < matrix[row][0]) {
//             bottom = row - 1;
//         } else {
//             break
//         }
//     }

//     if (top > bottom) {
//         return false;
//     }

//     let left = 0;
//     let right = cols - 1;

//     console.log('row', matrix[row])
//     while ( left <= right ) {
//         let middle = Math.floor((left + right) / 2);
//         console.log('mid', middle, matrix[row][middle]);
//         // pick up here.  middle is not right
//         if (target > matrix[row][middle]) {
//             left = middle + 1;
//         } else if (target < matrix[row][middle]) {
//             right = middle - 1;
//         } else {
//             return true
//         }
//     }

//     return false;
    
// };