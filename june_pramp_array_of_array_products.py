"""
problem

i: []integers, arr
o: []integers, 
rules
 - transform each element to a value that is product of all *other* elements
 - Solve without using div
 
examples

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]


approach
insert leftvalues in to results
iterate right to left
    calculate right value
    insert result value

"""

def array_of_array_products(arr):
    if len(arr) <= 1:
      return []
        
    result = [1]
    
    prev_product = 1
    for i in range(1,len(arr)):
        prev_value = arr[i - 1]
        curr_product = prev_value * prev_product
        result.append(curr_product)
        prev_product = curr_product

    prev_product = 1
    for i in range(len(arr) - 2, -1, -1):
        prev_value = arr[i + 1]
        curr_product = prev_value * prev_product
        result[i] = result[i] * curr_product
        prev_product = curr_product
    
    return result

if __name__ == "__main__":
    arr = [2, 7, 3, 4]
    array_of_array_products(arr) == [84, 24, 56, 42]

    arr = [8, 10, 2]
    array_of_array_products(arr) == [20, 16, 80]
