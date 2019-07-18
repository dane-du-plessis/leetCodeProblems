let mergeSort = function(arr, left, right) {
    console.log(arr + " " + left + " " + right)
    if (left < right) {
        let mid = Math.floor((left+right)/2)
        console.log(left + ' | ' + mid + ' | ' + right)
        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        arr = merge(arr.slice(left, mid+1), arr.slice(mid+1, right+1))
        return arr
    }
}

let isSorted = function(arr) {
    let element = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if ((arr[i] >= element)) {
            element = arr[i];
        } else {
            throw "Array " + arr + " is not sorted!";
        }
    }
}

let merge = function(arrLeft, arrRight) {
    // merge two sorted lists (not in-place)

    try {
        isSorted(arrLeft);
        isSorted(arrRight);
    } catch(e) {
        console.error(e);
    }

    let result = []
    console.log(arrLeft + ' <<0>> ' + arrRight)
    while (arrLeft.length > 0 && arrRight.length > 0) {
        arrLeft[arrLeft.length-1] >= arrRight[arrRight.length-1] ? 
            result.unshift(arrLeft.pop()) :
            result.unshift(arrRight.pop())
    }
    while (arrLeft.length > 0) {
        result.unshift(arrLeft.pop())
    }
    while (arrRight.length > 0) {
        result.unshift(arrRight.pop())
    }
    console.log(">>>> " + result)
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


// testInput(mergeSortStart([2,1]).toString(), '1,2')
testInput(mergeSortStart([5,3,4,1,2]).toString(), '1,2,3,4,5')
// testInput(mergeSortStart([6,5,4,3,2,1,0]).toString(), '0,1,2,3,4,5,6')
// testInput(mergeSortStart([6,5,4,3,2,1,0]).toString(), '0,1,2,3,4,5,6')
// testInput(mergeSortStart([1]).toString(), '1')
// testInput(mergeSortStart([]).toString(), '')


// console.log(merge([1,3,5], [2,4,6]))
// console.log(merge([1,3,5,7], [2,4,6,11]))
// console.log(merge([1,3,5,7], [0,1]))
// console.log(merge([], []))
// console.log(merge([-1,0,1], [-3,3]))
// console.log(merge([5,3,4], [1,2]))
