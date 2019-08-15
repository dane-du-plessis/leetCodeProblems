/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) {
    return 0
  }

  if (target < nums[0]) {
    return 0
  }

  if (target > nums[nums.length-1]) {
    return nums.length
  }

  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i
    }
    if (nums[i] < target && target < nums[i+1]) {
      return i+1
    }
  }  
};

let nums = [1,3,5,6]
console.log(searchInsert(nums, 0))
console.log(searchInsert(nums, 7))
console.log(searchInsert(nums, 3))
console.log(searchInsert(nums, 4))
