// true ?  console.log("yes") : console.log("no");

// true ?  (() => {console.log("yes"); console.log("and amen")})(): console.log('no');

function countRecursively (counter) {
    if (counter > 10) return;
    countRecursively(counter+1)
    console.log(counter)
}
countRecursively(1)

