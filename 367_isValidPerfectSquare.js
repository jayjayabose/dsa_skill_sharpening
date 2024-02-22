var isPerfectSquare = function(num) {
  let left = 0;
  let right = num;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let square = mid * mid;
      console.log(mid, square)
      if (square === num) {
          return true;
      } else if (square < num) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return false;
};