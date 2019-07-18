// Super-easy implementation of bubble sort

let bubbleSort = function(arr) {

    let temp = null;
    let isSorted = false;
    let counter = 0

    while(!isSorted) {
        isSorted = true; // falsify if a swap occurs
        for (let i = 1; i < arr.length; i++) {
            // counter++
            if (arr[i] < arr[i-1]) {
                counter++
                isSorted = false
                temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
            }
        }
    }

    console.log(counter)

    return arr;
}


let a = [1,2,3,4,5,6]

console.log(bubbleSort(a))