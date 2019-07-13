/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let candyMap = {}

    //load candies into the map
    candies.forEach(candy => {
            candyMap[candy] = 1
    })
    const types = Object.keys(candyMap).length
    if(types < candies.length/2) {
        return types
    }
    return candies.length/2
};

// let candies = [1,1,2,2,3,3]
let candies = [1,1,2,3]
console.log(distributeCandies(candies))