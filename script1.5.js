console.log(createNum(5, 8, 9, 8, 7, 6, 6, 6));

function createNum(...digits) {
    const [first, ...rest] = digits;

    if (digits.length == 0) return 0;

    if (digits.length == 1) return +first;

    return +(String(first) + createNum(...rest));
}


function createNum(...digits) {
    let result = '';

    for (let i = 0; i < digits.length; i++) {
        const digit = digits[i];
        result += digit;
    }

    return +result;
}

function createNum(...digits) {
    return +digits.join('')
}