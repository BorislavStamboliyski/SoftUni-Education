function familyTrip(input) {
    let budget = Number(input[0]);
    let countOvernight = Number(input[1]);
    let priceOvernight = Number(input[2]);
    let percentCosts = Number(input[3]);
    let costsOvernight = 0;
    let totalCots = 0;
    let bonusCosts = 0;

    if (countOvernight > 7){
        costsOvernight = priceOvernight * 0.95 * countOvernight;
    } else {
        costsOvernight = priceOvernight * countOvernight;
    }
    bonusCosts = (percentCosts / 100) * budget;
    totalCots = costsOvernight + bonusCosts;
    let diff = Math.abs(totalCots - budget);
    if (totalCots <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}
familyTrip(["500", "7", "66", "15"])