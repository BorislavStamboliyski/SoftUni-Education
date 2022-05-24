function sumPrimeNonPrime(input) {
    let prime = 0;
    let nonPrime = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "stop"){
        let digit = Number(command);
        if (digit < 0) {
            console.log(`Number is negative.`);
            command = input[index]; 
            index++;
            continue;
        } 
        if (digit === 1) {
        prime += digit;
        command = input[index]; 
        index++;
        continue;
        }

        let isNonPrime = false;
        for (let i = 2; i < Math.sqrt(digit); i++) {
            if (digit % i === 0) {
                isNonPrime = true;
                break;
            }
        }
        if (isNonPrime) {
            nonPrime += digit;
        } else {
            prime += digit;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

