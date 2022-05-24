function printAndSum(num1,num2) {
    let sum = 0;
    let numbers = '';
    for (i = num1; i <= num2 ; i++) {
        numbers += `${i} `
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);