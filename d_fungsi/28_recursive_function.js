function factorial1(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial1(n - 1);
    }
}


function factorial2(n) {
    return (n == 0 || n == 1)? 1 : n * factorial2(n - 1);
}


const factorial3 = n => (n === 0 || n === 1)? 1 : n * factorial3(n - 1);

console.log(factorial1(5));
console.log(factorial2(5));
console.log(factorial3(5));