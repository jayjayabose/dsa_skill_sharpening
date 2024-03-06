function threeSum(nums) {
  let output = []
  nums = nums.slice().sort((a,b) => a -b);
  // console.log('nums', nums);

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i - 1] === nums[i]) {
          continue;
      }
      // console.log('num', nums[i]);

      let leftIdx = i + 1;
      let rightIdx = nums.length - 1;


      while (leftIdx < rightIdx) {
          // let leftVal = nums[leftIdx];
          // let rightVal = nums[rightIdx];
          let sum = nums[i] + nums[leftIdx] + nums[rightIdx]
          if (sum === 0) {
              output.push([nums[i], nums[leftIdx], nums[rightIdx]]);
              leftIdx += 1;
              while (nums[leftIdx] === nums[leftIdx - 1]) {
                  leftIdx += 1;
              }
          } else if (sum < 0) {
              leftIdx += 1;
          } else {
              rightIdx -= 1;
          }
      }
  }

  return output;
}
