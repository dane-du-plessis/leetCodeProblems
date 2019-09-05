// https://austingwalters.com/everyday-algorithms-pancake-sort/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {

  // while out of order
  // find the largest out of order pancake and flip to bottom, 
  // then find the next largest out of order and flip to the bottom, 
  // then find the next largest...

  let nextToFlip = findIndexOfLargestOutOfOrder(A)
  
  while (nextToFlip) {
    nextToFlip = findIndexOfLargestOutOfOrder(A)
    A=flip(A,nextToFlip)
  }

};

var findIndexOfLargestOutOfOrder = function(A) {
  let largest = undefined
  let largestIndex = undefined
  for ( let i = 0; i < A.length-1; i++ ) {
    if ( A[i] > A[i+1] ) {
      if ( !largest ) {
        largest = A[i]
        largestIndex = i
      } else if( largest < A[i] ){
        largest = A[i]
        largestIndex = i
      }
    }
  }
  return largestIndex
}

var flip = function(A, index) {
  return A.slice(0,index).reverse().concat(A.slice(index))
}

var equals = function(A, B) {
  for (let i = 0; i < A.length; i++) {
    if(A[i] != B[i])
     return false
  }
  return true
}

// var testFlip = function(A, k, expected) {
//   let Aflip = flip(A, k)
//   if(!equals(Aflip, expected)) {
//     console.log("FAILED:  " + Aflip + " != " + expected)
//   } else {
//     console.log("SUCCESS: " + Aflip + " == " + expected)
//   }
// }

// testFlip([1,2,3], 2, [2,1,3])
// testFlip([1,2,3,4,5,6], 3, [3,2,1,4,5,6])
// testFlip([1,2,3], 1, [1,2,3])


// var testOutOrderIndex = function(A, index) {
//   let loooi = findIndexOfLargestOutOfOrder(A)
//   if(loooi != index) {
//     console.log("ERROR: expected: " + index + " returned: " + loooi)
//   } else {
//     console.log("SUCCESS: expected: " + index + " returned: " + loooi)
//   }
// }

// testOutOrderIndex([1,2,4,3], 2)
// testOutOrderIndex([1,8,4,3], 1)
// testOutOrderIndex([1,8,4,3], 1)
// testOutOrderIndex([1], undefined)
// testOutOrderIndex([], undefined)
// testOutOrderIndex([2,1], 0)
// testOutOrderIndex([2,11], undefined)


// console.log(findIndexOfLargestOutOfOrder([1,2,3]))
// console.log(findIndexOfLargestOutOfOrder([1,3,2]))
