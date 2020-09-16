/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let fullSet = new Set()
    for(let i = 0; i <= nums.length; i++) fullSet.add(i)
    nums.forEach(i => fullSet.delete(i))
    return fullSet.values().next().value
}


var missingNumber2 = function(nums) {
    return nums.length*(nums.length+1)/2 - nums.reduce((acc,val) => acc + val)
}


let nums = [0,1,2,3,5,6,7]

console.log(missingNumber(nums))
console.log(missingNumber2(nums))