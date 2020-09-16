/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null
    }

    const rootIndex = nums.length/2 - nums.length/2%1
    const root = new TreeNode(nums[rootIndex])
    // console.log(root.val)
    root.left = sortedArrayToBST(nums.slice(0,rootIndex))
    root.right = sortedArrayToBST(nums.slice(rootIndex+1))


    return root
};


// const sortedList = [-10,-3,0,5,9]

const sortedList = [0,1,2,3,4,5]
console.log(sortedArrayToBST(sortedList))