/**
 * @param {number[]} nums
 * @return {number}

  0,1,2,4,5,6,7
  
  7,0,1,2,4,5,6
  6,7,0,1,2,4,5
  5,6,7,0,1,2,4
  4,5,6,7,0,1,2

I: nums
 - not empty, integers only, not sparse
 - values positive, zero, negative
 - ascending
 - maybe rotated
O: nim value


EXAMPLES
[3,4,5,1,2].   
     ^
       ^ 
        

[4,5,6,7,0,1,2]   
       ^
           ^
         ^
           
[11,13,15,17]
     ^
 ^
ALGO

INIT: left, right
LOOP: while left <= right
    INIT mid

    IF right < mid
        go right // rotate point is on the right
    ELSE
        go left

return value at mid

--

      

 */
var findMin = function(nums) {
    let [l, r] = [0, nums.length - 1];
    let m;
    while (l <= r) {
        m = Math.floor(l + (r -l) / 2);
        if (nums[m - 1] > nums[m]) {
            return nums[m]
        }
        console.log(l, m, r)
        if (nums[r] < nums[m]) {
            l = m + 1
        } else {
            r = m - 1;
        }
    }

    return nums[m]
};