function safari(input) {
    let budget = Number(input[0]);
    let fuelNeeded = Number(input[1]);
    let day = input[2];
    let totalcosts = fuelNeeded * 2.10 + 100;
    if (day === "Saturday") {
        let total = totalcosts * 0.90;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
        } else {
            console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
        } 
    } else {
        let total = totalcosts * 0.80;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`Safari time! Money left: ${diff.toFixed(2)} lv. `);
        } else {
            console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
        } 
    }

}
safari(["120",
"30",
"Saturday"])
