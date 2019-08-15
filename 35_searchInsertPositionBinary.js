/**
 * @param {number[]} nums >>> in sorted ascending order
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
  if (nums[nums.length-1] < target) {
    return nums.length
  }
  return binSearchInsert(nums, 0, nums.length-1, target)
};

var binSearchInsert = function(nums, start, end, target) {
  if (start === end) {
    if (nums[start] == target) {
      return start
    }
    return start+1
  }

  let mid = Math.ceil((start + end)/2)

  if (nums[mid] == target) {
    return mid
  }

  if (nums[mid] < target) {
    return binSearchInsert(nums, mid, end, target)
  }
  return binSearchInsert(nums, start, mid-1, target)
}

// console.log(searchInsert([1,3,5], 0))
// console.log(searchInsert([1,3,5], 1))
// console.log(searchInsert([1,3,5], 2))
// console.log(searchInsert([1,3,5], 3))
// console.log(searchInsert([1,3,5], 4))
// console.log(searchInsert([1,3,5], 6))

console.log(searchInsert([1,3,5], 3))
console.log(searchInsert([1,4,6,7,8,9], 6))
