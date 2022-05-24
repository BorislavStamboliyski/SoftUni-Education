function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let countFishermen = Number(input[2]);
    let priceShip = 0;
    let total = 0;
    switch (season) {
        case "Spring": priceShip = 3000; break;
        case "Summer":
        case "Autumn": priceShip = 4200; break;
        case "Winter": priceShip = 2600; break;
    }
    if (countFishermen <= 6) {
        total = priceShip * 0.90;
    } else if (countFishermen > 6 && countFishermen <= 11) {
        total = priceShip * 0.85;        
        } else if (countFishermen > 11) {
            total = priceShip * 0.75;
        }
    if (countFishermen % 2 === 0 && season !== "Autumn") {
            total = total * 0.95;
    }
    let diff = Math.abs(total - budget);
    if (total <= budget) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
boat(["2000",
"Winter",
"13"])

