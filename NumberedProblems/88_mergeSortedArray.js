/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let actualLength = m
    let lastInsertPosition = 0
    nums2.forEach(e => {
        let inserted = false
        for (let j = lastInsertPosition; j < actualLength; j++) {
            console.log(e + "  " + nums1[j])
            if (e < nums1[j]) {
                console.log("inserting at " + j)
                insert(nums1, e, j)
                lastInsertPosition = j
                actualLength++
                inserted = true
                break
            }
        }
        if(!inserted) {
            insert(nums1, e, actualLength)
            lastInsertPosition = actualLength
            actualLength++
        }

    });
};

var insert = function (nums1, e, insertAt) {
    // shift all the elements up one position - the one at the end falls off
    for (let i = nums1.length - 2; i >= insertAt; i--) {
        nums1[i + 1] = nums1[i]
    }
    nums1[insertAt] = e
}

let nums1 = [1, 2, 3, 0, 0, 0]   // , m = 3
let nums2 = [2, 5, 6]         // , n = 3

merge(nums1, 3, nums2, nums2.length);

// insert(nums1, 2.5, nums1.length-1)

console.log(nums1)

