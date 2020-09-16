/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s.length === 1) return s
    let start = 0, end = s.length-1, temp = ''
    while(start < end) {
        //switch characters
        temp = s[end]
        s[end] = s[start]
        s[start] = temp
        ++start
        --end
    }
    // console.log(s)
    return s
}

let c = Array.from('abc')
console.log(reverseString(c))