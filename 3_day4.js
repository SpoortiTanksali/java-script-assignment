var arr1 = [5,6,7,8,9,10,11,12,13,14];

var evens = arr1.filter(function(x) {
  if (x % 2 === 0 || x === 0) {
    return x;
  }
})

console.log(`Even numbers are:${evens}`);
const myPrimeArray = arr1.filter(element => {
    for (let i = 2; i < element; i++) {
        if (element % i === 0) return false;
    }
    return element !== 1;
});
console.log(`Prime numbers are: ${myPrimeArray}`);