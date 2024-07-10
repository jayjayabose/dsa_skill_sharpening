def two_sum(nums, target)
    seen = {}
    nums.each_with_index do |num, idx|
        compliment = target - num
        if (seen.key?(compliment))
            return [seen[compliment], idx]
        end
        seen[num] = idx
    end
end