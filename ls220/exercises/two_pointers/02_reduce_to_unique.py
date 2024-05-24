'''
PROBLEM:

I: []integers, nums -- non descending order
O: int, count of unqiqu element

RULES
modify the array in-place 
start with a sequence of unique elements 
maintain order
return the count of these unique elements.

EXAMPLES
[3, 3, 5, 7, 7, 8], 4)
 3  5  7  8  x  x // 4

 3, 5, 7, 8, 7, 7
          a
                r

[1, 1, 2, 2, 2, 3, 4, 4, 5], 5)
 1  2  3  4  5  x  x  x  x

[0], 1)

[-5, -3, -3, -1, 0, 0, 0, 1], 5)

[6, 6, 6, 6, 6, 6, 6], 1)

DATA STRUCTURES


3, 5, 7, 8, 7, 3]
         a
               r
ALGO

 a, 0 // indictes indes of last unquie value
 r, 1 // find unique values

 LOOP r to end
  IF r is not same as a
    advance a
    swap 
  
  advance r

return a + 1

'''

def reduce_to_unqique(arr):
    anchor = 0
    for i in range(1, len(arr)):
        if arr[i] != arr[anchor]:
            anchor += 1
            arr[anchor] = arr[i]

    del arr[anchor + 1:]
    arr[:] = arr[:anchor + 1]
    
    return anchor + 1

reduce_to_unqique([3, 3, 5, 7, 7, 8])

# ReduceToUnique([3, 3, 5, 7, 7, 8], 4);
# ReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5);
# ReduceToUnique([0], 1);
# ReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5);
# ReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1);


# // console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
# // console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
# // console.log(testReduceToUnique([0], 1));
# // console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
# // console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));
