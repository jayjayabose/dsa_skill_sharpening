=begin
i:  {String} s
i:  {String} t
o:  {Boolean}

rules
 return true if t subsequence of s
 subsequence if t can be created by deleted zero or more chars from s

algo
init: anchor: 0 # points to char we are looking for next

LOOP: each char in search_string
    if chars match
        advance anchor
        if anchor >= search_string.length, return true

return false


=end
def is_subsequence(target_str, search_str)
  return true if target_str == ""
  
  idx = 0
  search_str.chars.each do |search_char|
      if search_char == target_str[idx]
          idx += 1
          return true if idx >= target_str.length
      end
  end
  return false
end