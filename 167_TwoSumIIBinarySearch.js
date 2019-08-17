/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let complement = 0
  let s = 0
  for (let i = 0; i < numbers.length; i++) {
    complement = target - numbers[i]
    j = search(numbers, i+1, numbers.length, complement)
    if (j != -1) return [i+1,j+1]
  }
  return undefined
};

var search = function(nums, start, end, c) {
  let mid = Math.ceil((start + end)/2)
  if (nums[mid] == c) {
    return mid
  }

  if(start === end) {
    return -1
  }

  if (nums[mid] < c) {
    return search(nums, mid, end, c)
  }
  return search(nums, start, mid-1, c)
}


console.log(twoSum([2,7,11,15], 9))


// console.log(search([2,5,7,9],0,4,11))
// console.log(search([2,5,7,9],0,4,2))
// console.log(search([2,5,7,9],0,4,5))
// console.log(search([2,5,7,9],0,4,7))
// console.log(search([2,5,7,9],0,4,9))
// console.log(search([2,5,7,9],0,4,10))
// console.log(search([2,5,7,9],0,4,4))





