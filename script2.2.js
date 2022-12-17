function isPerfect(number) {
    let div = 1;
    let sumDiv = 0;
    while (div < number) {

        if (number % div == 0) {
            sumDiv += div;

        }
        div++;
    }
    if (sumDiv == number) {
        return true
    } else {
        return false
    }

}

function range(min, max) {
    let arrPerfect = [];
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            arrPerfect.push(i);
        }
    }
    return arrPerfect;
}
console.log(range(2, 500));
