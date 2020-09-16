const { PerformanceObserver, performance } = require('perf_hooks');

var permuteUnique = function(nums) {
    
    var permuteRecursively = function(permutation, chooseFrom) {
        if (chooseFrom.length === 0) {
            res = res.concat([permutation])
        }
    
        let alreadyTried = new Set()
        let val = null
        for (let i = 0; i < chooseFrom.length; i++) {
            val = chooseFrom[i]
            if (!alreadyTried.has(val)) {
                permuteRecursively(
                    permutation.concat([val]), 
                    chooseFrom.slice(0,i).concat(chooseFrom.slice(i+1))
                )
                alreadyTried.add(val)
            }
        }
    }

    let res = []
    permuteRecursively([], nums)
    return res
};

let arr = Array.from('123456')

let start = performance.now()
permuteUnique(arr)
let end = performance.now()
console.log(end - start, ' ms')
