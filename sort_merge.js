let mergeSort = function(arr, left, right) {
    console.log(arr + " " + left + " " + right)
    if (left < right) {
        let mid = Math.floor((left+right)/2)
        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        return merge(arr, left, mid, right)
    }
}


let merge = function(arr, left, mid, right) {
    // merge two sorted lists (not in-place)
    let result = []
    let arrLeft = arr.slice(left, mid);
    let arrRight = arr.slice(mid, right);

    console.log(left + " " + mid + " " + right)
    console.log(arr + "")
    console.log(arrLeft + ' ' + arrRight)

    let k = 0;
    // let maxLen = arrLeft.length + arrRight.length;
    let i = 0;
    let j = 0;
    while (i < arrLeft.length && j < arrRight.length) {
        if (arrLeft[i] <= arrRight[j]) {
            result[k++] = arrLeft[i++]
        } else {
            result[k++] = arrRight[j++]
        }
    }

    // if the lists are different lengths, add any trailing elememnts to result
    if (i < arrLeft.length) {
        for (let c = i; c < arrLeft.length; c++)
            result.push(arrLeft[c]);
    } 
    if (j < arrRight.length) {
        for (let c = j; c < arrRight.length; c++) {
            result.push(arrRight[c]);
        }
    }

    // and return it
    console.log(result)
    return result
}

let mergeSortStart = function(arr) {
    return mergeSort(arr, 0, arr.length-1)
}



// -------------------------------------------------------


var testInput = function(inputString, expectedString) {
    if(inputString === expectedString) {
        console.log("SUCCESS: " + inputString + " == " + expectedString)
    } else {
        console.log("FAILURE: " + inputString + " != " + expectedString)
    }
}


testInput(mergeSortStart([2,1]).toString(), '1,2')
testInput(mergeSortStart([5,3,4,1,2]).toString(), '1,2,3,4,5')
testInput(mergeSortStart([6,5,4,3,2,1,0]).toString(), '0,1,2,3,4,5,6')
testInput(mergeSortStart([6,5,4,3,2,1,0]).toString(), '0,1,2,3,4,5,6')
// testInput(mergeSortStart([1]).toString(), '1')
// testInput(mergeSortStart([]).toString(), '')


/*
let arr =[2,3,4,5,6,7,8];
// let arr =[1];
let L = 0;
let R = arr.length-1;
let mid = Math.floor((L+R)/2);
console.log(merge(arr, L, mid, R));
*/


// let arr = [1,3,5,2,4,6];
// let arr = [1,2,3,-3,-2,-1,0];
// let arr = [2,1];
// let arr = [1];
// let arr = [];
// let L = 0;
// let R = arr.length;
// let mid = Math.floor((L+R)/2);
// console.log(L + ' ' + mid + ' ' + R)
// merge(arr, L, mid, R)
