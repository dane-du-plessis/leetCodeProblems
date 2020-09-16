/**
 * https://leetcode.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

var permute = function(nums) {
    
    var permuteRecursively = function(permutation, chooseFrom) {
        if (chooseFrom.length === 0) {
            res = res.concat([permutation])
        }
    
        for(let i = 0; i < chooseFrom.length; i++) {
            permuteRecursively(permutation.concat([chooseFrom[i]]) , chooseFrom.slice(0,i).concat(chooseFrom.slice(i+1)))
        }
    }

    let res = []
    permuteRecursively([], nums)
    return res;
};

console.log(permute(['apples','apples','melons']))