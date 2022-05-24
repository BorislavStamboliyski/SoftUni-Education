function familyTrip(input) {
    let budget = Number(input[0]);
    let countOvernight = Number(input[1]);
    let priceOvernight = Number(input[2]);
    let percentExtraCosts = Number(input[3]);
    let extraCosts = (percentExtraCosts / 100) * budget;
    if (countOvernight > 7) {
        let newpriceOvernight = priceOvernight * 0.95;
        let total = countOvernight * newpriceOvernight + extraCosts;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
        } else {
            console.log(`${diff.toFixed(2)} leva needed.`);
        }
    } else {
        let total = countOvernight * priceOvernight + extraCosts;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
        } else {
            console.log(`${diff.toFixed(2)} leva needed.`);
        }
    }

}
familyTrip(["500",
"7",
"66",
"15"])

