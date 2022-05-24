function sumOfNumbers(input) {
    let text = input[0];
    let sum = 0;
    for (i = 0; i < text.length; i++){
        let num = Number(text[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNumbers(["564891"]);