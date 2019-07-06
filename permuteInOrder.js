console.log("Stable permute...")

function permute (arrayA, arrayB) {
    permuteRecursive(arrayA,arrayB, [])
}

function permuteRecursive (arrayA, arrayB, res) {
    if(arrayA.length === 0 || arrayB.length === 0) {
        console.log(res.concat(arrayA).concat(arrayB).join(''))
        return
    }
    permuteRecursive(arrayA.slice(1), arrayB, res.concat(arrayA[0]))
    permuteRecursive(arrayA, arrayB.slice(1), res.concat(arrayB[0]))
}

let a = Array.from('123')
let b = Array.from('abc')

permute(a,b)
