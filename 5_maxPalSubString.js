/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
const { performance } = require('perf_hooks');

var longestPalindrome = function(s) {
    const findOddPalindrome = function(index, s) {
        let left = s[index-1] 
        let right = s[index+1]
        let offset = 1
        do {
            if (left && right && left === right) {
                offset++
                left = s[index - offset]
                right = s[index + offset]
            } else {
                offset--
                break
            }
        } while(true)
        return s.slice(index - offset, index+offset+1)
    }

    const findEvenPalindrome = function(index, s) {
        if (s[index] !== s[index+1]) {
            return ''
        }
        let left = s[index-1]
        let right = s[index+2]
        let offset = 1
        do {
            if (left && right && left === right) {
                offset++
                left = s[index - offset]
                right = s[index + offset + 1]
            } else {
                offset--
                break
            }
        } while(true)
        return s.slice(index - offset, index + offset +2)
    }

    let longest = ''
    let pal = ''
    for(let i = 0; i < s.length; i++) {
        pal = findOddPalindrome(i,s)
        pal.length > longest.length ? longest = pal : null
        pal = findEvenPalindrome(i,s)
        pal.length > longest.length ? longest = pal : null
    }
    return longest
}

let start = performance.now()
// console.log(longestPalindrome('tttttttttteegadfsgdfdsaasdfghjklkjhgfdsaasdfsdfas'))
console.log(longestPalindrome("abbaabbaabbasdfghjkl;lkjhgfghjkl;lkjhgfdsdfghjklkjhgffghjkjhgfghjkjhg"))
let end = performance.now()
console.log(end - start, ' ms')


