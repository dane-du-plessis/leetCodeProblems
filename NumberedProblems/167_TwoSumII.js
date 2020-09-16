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
    j = search(numbers, i+1, complement)
    if (j != -1) return [i+1,j+1]
  }
  return undefined
};

var search = function(nums, startAt, c) {
  for(let i = startAt; i < nums.length; i++) {
    if(nums[i] === c) return i
  }
  return -1
}

// console.log(search([1,2,3], 0, 3))
console.log(twoSum([2,7,11,15], 9))


// var search = function(nums, target, exact) {
//   return binSearch(nums, target, 0, nums.length, exact)
// }

// var binSearch = function(nums, target, start, end, exact) {
//   if (start == end) { 
//     if (nums[start] == target) {
//       return start
//     } else {
//       if (exact) {
//         return -1
//       } else {
//         return start-1
//       }
//     }
//   }

//   let mid = Math.ceil((start+end)/2)
//   if ( nums[mid] == target ) {
//     return mid
//   } if ( target < nums[mid] ) {
//     return binSearch(nums, target, start, mid-1)
//   } else {
//     return binSearch(nums, target, mid, end)
//   }
// }
 
// console.log(search([44,66,88,99],  44, true) + " " +  0)
// console.log(search([44,66,88,99],  66, true) + " " +  1)
// console.log(search([44,66,88,99],  88, true) + " " +  2)
// console.log(search([44,66,88,99],  99, true) + " " +  3)
// console.log(search([44,66,88,99], 123, true) + " " + -1)


