function sumOfOddNumbers(n) {
    let sum = 0;
    let num = 1;
    let counter = 0;
    while (counter < n) {
        console.log(num);
        sum+= num;
        num += 2;
        counter++; 
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
sumOfOddNumbers(3);