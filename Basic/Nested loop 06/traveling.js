function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;
    while (command !== "End") {
        let destination = command;
        let budgetNeeded = Number(input[index]);
        index++;
        let moneyEarn = Number(input[index]);
        let total = 0;
        while (total < budgetNeeded) {
            total += moneyEarn;
            index++;
            moneyEarn = Number(input[index]);
        }  
        console.log(`Going to ${destination}!`);
                command = input[index];
                index++;   
    }
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
