/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length;i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if (i !== j) {
//                 if (target === nums[i] + nums[j])
//                     return [i,j]
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    // console.log(nums)
    let map = new Map()
    
    nums.forEach((val, index) => map.set(val, index))
    let complement = 0, match
    for(let i = 0; i < nums.length; i++) {
        complement = target - nums[i]
        match = map.get(complement)
        if(match) {
            return [i, map.get(complement)]
        }
    }

    // console.log(map)
    return null
};

let nums = [1,3,4,2]
let target = 6

console.log(twoSum(nums, target))