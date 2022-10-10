function numbers(l, r) {
    var x=[];
    var i=l;
    while(x.push(i++)<r){};
    return x;        
  }
function oddNumbers(l, r) {
    let arr = [];
    while (l <= r) {
        arr.push(l);
        l += 1;
    };
    return arr.filter(n => n % 2);
}
console.log(numbers(5, 10));
console.log(oddNumbers(5,14));