"""
problem:

Planned to give N research grants this year.
Budget reduced to newBudget
Need to reallocate the grants. 
  
 Impact as few grant recipients as possible by applying a maximum cap on all grants. 
 Every grant initially planned to be higher than cap will now be exactly cap dollars. 
 Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, 
write a function findGrantsCap that 
  finds in the most efficient manner a cap such that 
  the least number of recipients is impacted and 
  that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

--
i: grantsArray: [] numbers
i: newBudget: number
o: number, represent cap
rules:
 find a cap that
  reduces fewest grants possilbe
  produces spend === newBudget
 

example
newBudget: 190
grantsArray: [2, 100, 50, 120, 1000], 

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
--
spend_total: 1272
over_spend: 1082 (1272 - 190) # 

--
[1000, 120, 100, 50, 2, (0)] 
 1000                   # 1272
  120  120              #  392
  100  100  100         #  352
  50.  50.  50. 50.     #  202
  2.   2.  2.   2.   2  #   10 <- spend_total <= newBudget
                     ^
 lower_bound = 2
 i: 4
 caps impacted: 4
 spend_total: 10
 newBudget: 190
 under_spend: 190 - 10 = 180 (newBUdget - total_spend)
 optimized cap: lower_bound + (under_spend / caps_impacted) : 180 / 4 = 45
 
 
algo:
 sort descenxing
 find lower bound # cap of grant amount where spend_total <= new Budget
 find optimial cap #
"""

def find_grants_cap(grantsArray, newBudget):
  def optimize_cap(lower_bound):
    grants_impacted = grantsArray.index(lower_bound)
    if grants_impacted == 0:
      return grantsArray[0]
    
    spend_total = calculate_spend_at_cap(lower_bound)
    under_spend = newBudget - spend_total
    optimized_cap = lower_bound + (under_spend / float(grants_impacted))
    return optimized_cap
    
    
  def calculate_spend_at_cap(cap):
    spend = 0
    for grant in grantsArray:
      if grant > cap:
        spend += cap
      else:
        spend += grant
    
    return spend
  
  def find_lower_bound():
    for grant in grantsArray:
      cap = grant
      spend = calculate_spend_at_cap(cap)
      if spend <= newBudget:
        return cap
  
  grantsArray = grantsArray[:]
  grantsArray.sort(reverse = True)
  grantsArray.append(0)
  
  lower_bound = find_lower_bound()
  optimized_cap = optimize_cap(lower_bound)
  
#  print('debug', optimized_cap)
  return optimized_cap
  
