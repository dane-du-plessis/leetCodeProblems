// '(', ')', '{', '}', '[' and ']'

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = []

    let next = ''
    for (var i = 0; i < s.length; i++) {
        next = s.charAt(i)
        if (next == '(' || next == '[' || next == '{') {
            brackets.push(next)
        } else {
            console.log(next + " " + brackets[brackets.length-1])
            // console.log(brackets[brackets.length-1])
            if ( next == ')') {
                if('(' == brackets[brackets.length-1]){ 
                    brackets.pop()
                } else {
                    return false
                }
            } else if (next == ']') {
                if ('[' == brackets[brackets.length-1]) {
                    brackets.pop()
                } else {
                    return false
                }
            } else if (next == '}') {
                if('{' == brackets[brackets.length-1]) {
                    brackets.pop()
                } else {
                    return false
                }
            } else {
                return false
            }
        }
    }

    return brackets.length === 0
};


console.log(isValid(''))