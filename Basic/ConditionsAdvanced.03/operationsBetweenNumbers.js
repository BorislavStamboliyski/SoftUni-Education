function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let op = input[2];
    let sum = 0;
    let del = 0;
    switch(op) {
        case "+":
            sum = n1 + n2;
            break;
        case "-":
            sum = n1 - n2;
            break;
        case "*":
            sum = n1 * n2;
            break;
        case "/":
            sum = n1 / n2;
            break;
        case "%":
            sum = n1 % n2;
            break;
    } 
    if (op === "+" || op === "-" || op === "*") {
        if (sum % 2 === 0) {
            console.log(`${n1} ${op} ${n2} = ${sum} - even`);
        } else {
            console.log(`${n1} ${op} ${n2} = ${sum} - odd`);
        }
    } else {
        if (n2 === 0 ) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            if (op === "/") {
                console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`);
            }
            else {
                let rest = n1 % n2;
                console.log(`${n1} % ${n2} = ${rest}`);
            }
        }

    }
}
operationsBetweenNumbers(["10",
"0",
"%"])


