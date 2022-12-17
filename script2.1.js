function divider(number) {
    let div = 1;
    let sumDiv = 0;
    while (div < number) {

        if (number % div == 0) {
            sumDiv += div;

        }
        div++;
    }
    if (sumDiv == number) {
        console.log(`Number - ${number} is perfect.`);
    } else {
        console.log(`Try again`)
    }

}
divider(28);

