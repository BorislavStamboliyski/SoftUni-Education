function sortNumbers(num1, num2, num3) {
    let bigest;
    let bigger;
    let big;

    if (num1 >= num2 && num1 >= num3) {
        bigest = num1;
        if (num2 >= num3) {
            bigger = num2;
            big = num3;
        } else {
            bigger = num3;
            big = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        bigest = num2;
        if (num1 >= num3) {
            bigger = num1;
            big = num3;
        } else {
            bigger = num3;
            big = num1;
        }
    } else {
        bigest = num3;
        if (num1 >= num2) {
            bigger = num1;
            big = num2;
        } else {
            bigger = num2;
            big = num1;
        }
    }
    console.log(bigest);
    console.log(bigger);
    console.log(big);
}
sortNumbers(0
    ,0
    ,2
    
    );