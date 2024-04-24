"""
https://leetcode.com/problems/triangle/

NOTES to SELF
- my diagram helped ALOT
- doing high level pseudo code was useful
- going back to pseudocode helped ALOT
- i could not comprehend this solution yesterday. i can learn thi stuff


I: 2d array, triange array
O: min path sum from top row to bottom row
Rules
top: 0,0, bottom 

Func: minimum(row, col)
# base case
 IF row is last row
    return value at [row][col]

## reduce case
  value at [row][col] + min ([row + 1][col], row[+1], col+1)

"""
      
# class Solution:
#     def minimumTotal(self, triangle: List[List[int]]) -> int:
#         def minimum(row, col):
#             if row == len(triangle) - 1:
#                 return triangle[row][col]
            
#             return triangle[row][col] + min(minimum(row + 1, col), minimum(row + 1, col + 1))
        
#         return minimum(0,0)

"""

A:
create a results array
    same elements, 0 valuse
    wth an extra  row of zeros

traverse result in reverse, penultmate to frst
    assign result value
        triangle value + lower of sum from adjacent reuslt nodes
return first element from results


"""


class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        height = len(triangle)
        result = [[0] * (i + 1) for i in range(height + 1)]
        
        for r in range(height - 1, -1, -1):
            row = triangle[r]
            for c in range(len(row) - 1, -1, -1):
                result[r][c] = triangle[r][c] + min(result[r + 1][c], result[r + 1][c + 1])

        return result[0][0]