var isPowerOfThree = function(n) {
    // n ^ m

    // 3^0
    if (n === 1) return true

    trial = 3
    while(trial < n)
        trial *= 3
    return trial === n
}

const input  = [0,     1,    2,     3,    7,     9,    15,    22,    27,   81,   1000]
const output = [false, true, false, true, false, true, false, false, true, true, false]

for(let i = 0; i < input.length; i++) {
    console.log(input[i] + " " + isPowerOfThree(input[i]) + " " + output[i])
}