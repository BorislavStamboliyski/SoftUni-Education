function harvest(input) {
    let area = Number(input[0]);
    let amountGrape = Number(input[1]);
    let neededWine = Number(input[2]);
    let countWorkers = Number(input[3]);
    let areaGrape = area * 0.4;
    let totalAmountGrape = amountGrape * areaGrape;
    let Wine = totalAmountGrape / 2.5;  // litri vino
    
    if (Wine >= neededWine) {
        let diff = Math.ceil(Wine - neededWine);
        let winePerworker = Math.ceil(diff / countWorkers);
        console.log(`Good harvest this year! Total wine: ${Wine} liters.`);
        console.log(`${diff} liters left -> ${winePerworker} liters per person.`);
    } else {
        let diff = Math.floor(neededWine - Wine);
        console.log(`It will be a tough winter! More ${diff} liters wine needed.`);
    }
}
harvest(["650", "2", "175", "3"]);