function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1]
    let carClass = "";
    let typeCar = "";
    let priceCar = 0;
    if (budget <= 100) {
        carClass = "Economy class";
        switch (season) {
            case "Summer":
                typeCar = "Cabrio";
                priceCar = budget * 0.35;
                break;
            case "Winter":
                typeCar = "Jeep";
                priceCar = budget * 0.65;
        }
    } else if (budget <= 500) {
        carClass = "Compact class";
        switch (season) {
            case "Summer":
                typeCar = "Cabrio";
                priceCar = budget * 0.45;
                break;
            case "Winter":
                typeCar = "Jeep";
                priceCar = budget * 0.80;
                break;
        }
    } else {
        carClass = "Luxury class"
        typeCar = "Jeep";
        priceCar = budget * 0.90;
    }
    console.log(`${carClass}`);
    console.log(`${typeCar} - ${priceCar.toFixed(2)}`);
}
carToGo(["1010", "Summer"]);