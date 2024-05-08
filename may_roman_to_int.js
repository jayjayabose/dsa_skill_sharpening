// https://leetcode.com/problems/roman-to-integer/

const p = (...args) => console.log(...args);

function romanToInt(s) {
    let decimalValue = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let symbol = s[i]
        let currValue = roman[symbol]
        if (currValue < prevValue) {
            currValue *= -1;
        }
        decimalValue += currValue;
        prevValue = currValue;
    }


    return decimalValue;
}

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};













// console.log(values); // Output: { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

// var romanToInt = function(s) {
//     let total = 0;
//     let prev = -Infinity;
//     for (let i = s.length - 1; i >= 0; i--) {
//         let value = roman[s[i]];
//         console.log(s[i], value)
//         if (value < prev) {
//             value *= -1;
//         }
//         total += value;
//         prev = Math.abs(value);
//     }

//     return total;
// };