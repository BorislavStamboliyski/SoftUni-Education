function pets(input) {
    let days = Number(input[0]);
    let foodInKg = Number(input[1]);
    let foodDogKG = Number(input[2]);  // hrana v kilogrami za den za kuche
    let foodCatKg = Number(input[3]);  // hrana v kilogrami za den za kotka
    let foodTurtleGr = Number(input[4]); // hrana v gramove za den za kostenurka
    let totalFood = foodDogKG * days + foodCatKg * days + (foodTurtleGr / 1000) * days;
    if (totalFood <= foodInKg) {
        let diff = Math.floor(foodInKg - totalFood);
        console.log(`${diff} kilos of food left.`);
    } else {
        let diff = Math.ceil(totalFood - foodInKg);
        console.log(`${diff} more kilos of food are needed.`);
    }

}
pets(["5", "10", "2.1", "0.8", "321"]);