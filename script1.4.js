console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))

function factorial(a) {
    let result = 1;
    if (a < 2) return 1;

    for (let i = 2; i <= a; i++) {
        result *= i;
    }
    return result
}