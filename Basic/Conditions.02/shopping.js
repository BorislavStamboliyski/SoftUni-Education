function shopping(input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let rams = Number(input[3]);
    let priceVideocards = videocards * 250;
    let priceProcessors = processors * (priceVideocards * 0.35);
    let priceRams = rams * (priceVideocards * 0.1);
    let total = priceProcessors + priceRams + priceVideocards;
    let costs;
    if (videocards > processors) {
        costs = total * 0.85;
    } else {
        costs = total;
        
    }
    if (costs <= budget) {
        let moneyLeft = (budget - costs).toFixed(2);
        console.log(`You have ${moneyLeft} leva left!`);
    } else {
        let moneyNeeded = (costs - budget).toFixed(2);
        console.log(`Not enough money! You need ${moneyNeeded} leva more!`);
    }
}
shopping(["900",
"2",
"1",
"3"])

