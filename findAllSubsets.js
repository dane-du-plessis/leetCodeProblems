// given a set of size n, find all subsets


let subsets = function(allSubsets, set, remaining) {
    if(remaining.length === 0) {
        // add to set
        // allSubsets.add([])
        // console.log(set)
        allSubsets.push(set)
        return
    }

    //include item at index
    subsets(allSubsets, set.concat(remaining[0]), remaining.slice(1))

    //exclude item at index
    subsets(allSubsets, set.slice(), remaining.slice(1))

    // return allSubsets
}

let allSubsets = []
let testSet = [1,2,3]

subsets(allSubsets, [], testSet)

console.log(allSubsets)
console.log(allSubsets.length)