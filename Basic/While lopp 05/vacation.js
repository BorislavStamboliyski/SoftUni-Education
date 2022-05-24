function vacation(input) {
    let index = 0;
    let moneyForVacation = Number(input[index]);
    index++;
    let budget = Number(input[index]);
    index++;
    let days = 0;
    let count = 0;

    while (true){
        let text = input[index];
        index++;
        let money = Number(input[index]);
        index++;
        switch(text) {
            case "spend":
                budget -= money;
                count++;
                break;
            case "save":
                budget += money;
                count = 0;
                break;
        }
        days++;
        if (budget < 0){
            budget = 0;
        }
        if (count === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }
        if (budget >= moneyForVacation ) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
