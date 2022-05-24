function fuelTankTwo(input) {
    let fuel = input[0];
    let amountFuel = Number(input[1]);
    let clubCard = input[2];
    if (fuel === "Gas") {
        let fuelPrice = 0.0
        if (clubCard === "Yes") {
            fuelPrice = 0.85 * amountFuel;
        } else  {
            fuelPrice = 0.93 * amountFuel;
        } 
        if (amountFuel < 20 ) {
            fuelPrice = fuelPrice;
        } else if (amountFuel > 25) {
            fuelPrice = fuelPrice * 0.90;
        } else {
            fuelPrice = fuelPrice * 0.92;
        }
        console.log(`${fuelPrice.toFixed(2)} lv.`);
    } else if (fuel === "Gasoline") {
        let fuelPrice = 0.0
        if (clubCard === "Yes") {
            fuelPrice = 2.04 * amountFuel;
        } else {
            fuelPrice = 2.22 * amountFuel;
        } 
        if (amountFuel < 20 ) {
            fuelPrice = fuelPrice;
        } else if (amountFuel > 25) {
            fuelPrice = fuelPrice * 0.90;
        } else {
            fuelPrice = fuelPrice * 0.92;
        }
        console.log(`${fuelPrice.toFixed(2)} lv.`);
    } else if (fuel === "Diesel") {
        let fuelPrice = 0.0
        if (clubCard === "Yes") {
            fuelPrice = 2.21 * amountFuel;
        } else  {
            fuelPrice = 2.33 * amountFuel;
        } 
        if (amountFuel < 20 ) {
            fuelPrice = fuelPrice;
        } else if (amountFuel > 25) {
            fuelPrice = fuelPrice * 0.90;
        } else {
            fuelPrice = fuelPrice * 0.92;
        }
        console.log(`${fuelPrice.toFixed(2)} lv.`);
    }

}
fuelTankTwo(["Gasoline", "25", "Yes"]);