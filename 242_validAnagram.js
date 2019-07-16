/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)
        return false

    let buildLetterMap = function(s) {
        let letterMap  = {}
        for (c of s) {
            if(!letterMap[c]){
                letterMap[c] = 1
            } else {
                letterMap[c] = letterMap[c] + 1
            }
        }
        return letterMap
    }

    let sMap = buildLetterMap(s)
    let tMap = buildLetterMap(t)
    
    for(c of s) {
        if(sMap[c] !== tMap[c])
            return false
    }

    return true
    
};

console.log(isAnagram('abc', 'def'))

console.log(isAnagram('abc', 'cba'))