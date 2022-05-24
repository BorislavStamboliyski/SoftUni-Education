function numbersDivisibleByNine(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumber = "";
    for (i = n; i <= m ; i++) {
        if (i % 9 === 0){
            sum += i ;
            outputNumber += `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumber);
}
numbersDivisibleByNine(["100", "200"])