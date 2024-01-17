// PROBLEM: sort an array
// aproach: meerging sorted array is easy
// recurse down to single element arrays -- which are sorted arrays
// then buuld back up, merging sorted arrays

function mergeSort(arr) {
  
  if (arr.length === 1) {
    return arr;
  }

  // split array to left and right
  let mid = Math.floor(arr.length / 2)
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  // recursive call on left and right
  leftArr = mergeSort(leftArr)
  rightArr = mergeSort(rightArr);

  // when they return, they are sorted
  // now merge
  return merge(leftArr, rightArr)
}

// helper function
function merge(left, right) {
  let sorted = [];

  // exit consition is empty array b/c we are mutating array
  // mutating the arry is fine b/c we created left and right as new arrays
  // we are not mutating the argument passed o mergeSort
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  // return an array + empty array + remainder (or vice versa)
  return [...sorted, ...left, ...right]
}


console.log(mergeSort([1,7,6,3,2,9]));

