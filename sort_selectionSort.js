var testInput = function(inputString, expectedString) {
    if(inputString === expectedString) {
        console.log("SUCCESS: " + inputString + " == " + expectedString)
    } else {
        console.log("FAILURE: " + inputString + " != " + expectedString)
    }
}

var findMinIndex = function(arr, startAt) {
    if(arr.length === 0 || startAt > arr.length -1)
        return null
    let minIndex = startAt
    for (let i = startAt; i < arr.length; i++) {
        if (arr[i] <= arr[minIndex]) {
            minIndex = i
        }
    }
    return minIndex
}

var selectionSort = function(arr) {
    let minIndex = null
    for(let i = 0; i < arr.length; i++) {
        minIndex = findMinIndex(arr, i)
        if (minIndex !== i){
            swap(arr, minIndex, i)
        }
    }
    return arr
}

var swap = function(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let arr = [0,2,3]


testInput(selectionSort([2,1]).toString(), '1,2')
testInput(selectionSort([1]).toString(), '1')
testInput(selectionSort([5,3,4,1,2]).toString(), '1,2,3,4,5')
testInput(selectionSort([6,5,4,3,2,1,0]).toString(), '0,1,2,3,4,5,6')
testInput(selectionSort([6,5,4,3,2,1,0]).toString(), '0,1,2,3,4,5,6')
testInput(selectionSort([]).toString(), '')
