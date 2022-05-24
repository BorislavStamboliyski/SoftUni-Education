function division(num) {
    let divide;
    let isDivide = true;
    if (num % 2 == 0) {
        divide = 2;
        if (num % 3 == 0 && num % 10 !== 0) {
            divide = 6;
        } else if (num % 7 == 0 && num % 10 !== 0) {
            divide = 7;
        } else if (num % 10 == 0){
            divide = 10;
        }
    } else if (num % 3 == 0) {
        divide = 3;
        if (num % 7 == 0){
            divide = 7;
        }
    }  else if (num % 7 == 0) {
        divide = 7;
    }
    else {
        isDivide = false;
    }
    if (isDivide) {
        console.log(`The number is divisible by ${divide}`);
    } else {
        console.log(`Not divisible`);
    }
}
division(30);
division(15);
division(12);
division(1643);