/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x == 1){
      return x
    }
    return findRootInt(x, 0, x)
};

var findRootInt = function(x, s, g) {
  if(s == g-1) {
    return s
  }
  
  let m = Math.floor((s+g)/2)
  // console.log("s " + s + " g " + g + " m " + m)
  if (m*m > x) {
    return findRootInt(x,s,m)
  } else {
    return findRootInt(x,m,g)
  }
}


var testRoot = function(input) {
  let result = mySqrt(input)
  let expected = Math.floor(Math.sqrt(input))
  if (expected === result) {
    console.log(input + "^0.5 >> " + expected + " == " + result)
  } else {
    console.log(input + "^0.5 >> " + expected + " != " + result + " FAIL")
  }
}

// testRoot(9)

for (let i = 0; i < 1000; i++){
  testRoot(i)
}