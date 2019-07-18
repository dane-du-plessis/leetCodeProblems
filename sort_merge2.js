let mergeSort = function(array, left, right) {
    // console.log(">>>>>>>>" +left + " " + right)
    if(left < right) {
        // calculate mid
        let mid = Math.floor((left+right)/2);
        // sort left
        mergeSort(array, left, mid);
        // sort right
        mergeSort(array, mid+1, right);
        // merge sorted halves and return
        merge(array, left, mid, right)
    }
}

let merge = function(array, left, mid, right) {
    // merge two sorted arrays
    let arrA = array.slice(left, mid+1);
    let arrB = array.slice(mid+1, right+1);
    // console.log(arrA)
    // console.log(arrB)
    let k = left;
    while(arrA.length > 0 && arrB.length > 0) {
        arrA[0] <= arrB[0] ? 
            array[k++] = arrA.shift() : 
            array[k++] = arrB.shift();
    }
    while(arrA.length > 0) {
        array[k++] = arrA.shift();
    }
    while(arrB.length > 0) {
        array[k++] = arrB.shift();
    }
}

let startSort = function(array) {
    return mergeSort(array, 0, array.length-1);
}

// let arr = [1,2,3,7,8,9]
// let arr = [0]
// let arr = []
// let arr = [2,1]
// let arr = [1,2,1]
// let arr = [1,9,1,2]
// let arr = [1,9,11,1,2]
// ======================
// let left = 0;
// let right = arr.length-1;
// let mid = Math.floor((left+right)/2);
// merge(arr, left, mid, right);
// console.log(arr);

let testSort = function(arr, expected) {
    startSort(arr);
    let pass = true;
    if(arr.length !== expected.length) {
        pass = false;
    } else {
        arr.forEach((v,i) => {
            v !== expected[i] ? pass = false : null;
        })
    }
    if(pass) {
        console.log("SUCCESS: ")
        console.log(arr + " == " + expected)
    } else {
        console.log("FAILURE: ")
        console.log(arr + " != " + expected)
    }
}

testSort([2,1], [1,2])
testSort([4,5,3,2,1], [1,2,3,4,5])
