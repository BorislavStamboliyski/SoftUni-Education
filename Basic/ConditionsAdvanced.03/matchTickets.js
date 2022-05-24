function matchTickets(input) {
    let budget = Number(input[0]);
    let categorie = input[1];
    let countPeople = Number(input[2]);
    let moneyLeft = 0;
    let ticket = 0;
    if (countPeople <= 4){
        moneyLeft = budget * 0.25;
    } else if (countPeople <= 9) {
        moneyLeft = budget * 0.40;
    } else if (countPeople <= 24) {
        moneyLeft = budget * 0.50;
    } else if (countPeople <= 49){
        moneyLeft = budget * 0.60;
    } else {
        moneyLeft = budget * 0.75;
    }
    switch(categorie) {
        case "VIP":
            ticket = 499.99 * countPeople;
            break;
        case "Normal":
            ticket = 249.99 * countPeople;
            break;
    }
    let diff = Math.abs(moneyLeft - ticket);
    if (moneyLeft >= ticket) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
matchTickets(["30000", "VIP", "49"])