function fuelTank(input) {
    let name = input[0];
    let litersInCar = Number(input[1]);
    if (name === "Diesel") {
        let fuel = "diesel";
        if (litersInCar >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        } 
    } else if (name === "Gasoline") {
        let fuel = "gasoline";
        if (litersInCar >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        } 
    } else if (name === "Gas") {
        let fuel = "gas";
        if (litersInCar >= 25) {
            
            console.log(`You have enough ${fuel}.`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        } 
    } else {
        console.log(`Invalid fuel!`);
    }
}
fuelTank(["Gas", "25"])