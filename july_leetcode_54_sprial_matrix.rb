=begin
i: @param {Integer[][]} matrix
o: @return {Integer[]}
algo
 init: output []
 init: element_count
 init: top, right, bottom, left # column index


 LOOP: while output.length < element count
    IF elements_remain and top <= bottom
        # process top
        left.upTo(right) do |col|
            output.push(matrix[top][row])
        end
        top += 1
    
    output.push('x') output.length < element count
=end
def spiral_order(matrix)
  output = []
  element_count = matrix.length * matrix[0].length
  top = 0
  right = matrix[0].length - 1
  bottom  = matrix.length - 1
  left = 0

  while output.length < element_count
      # top
      if output.length < element_count
          left.upto(right) do |col|
              output.push(matrix[top][col])
          end
          top += 1
      end

      # right
      if output.length < element_count
          top.upto(bottom) do |row|
              output.push(matrix[row][right])
          end
          right -= 1
      end

      # bottom
      if output.length < element_count
          right.downto(left) do |col|
              output.push(matrix[bottom][col])
          end
          bottom -= 1
      end

      # left
      if output.length < element_count
          bottom.downto(top) do |row|
              output.push(matrix[row][left])
          end
          left += 1 
      end        
  end

  return output
  
end