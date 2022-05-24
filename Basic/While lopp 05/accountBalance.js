function accountBalance(input) {
    let index = 1;
    let total = 0;
    let deposit = input[0];
    while(deposit !== "NoMoreMoney") {
        let increase = Number(deposit);
        if (increase < 0 ){
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${increase.toFixed(2)}`);
        total += increase;
        deposit = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])
