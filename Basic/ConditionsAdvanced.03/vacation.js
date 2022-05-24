function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = "";
    let placeForOvernight = "";
    let price = 0;
    if (budget <= 1000) {
        placeForOvernight = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.45;
                break;
        }
    } else if (budget <= 3000) {
        placeForOvernight = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska"
                price = budget * 0.80;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.60;
                break;
        }
    } else {
        placeForOvernight = "Hotel";
        price = budget * 0.90;
        switch (season) {
            case "Summer":
                location = "Alaska";
                break;
            case "Winter":
                location = "Morocco";
                break;
        }
    }
    console.log(`${location} - ${placeForOvernight} - ${price.toFixed(2)}`);
}
vacation(["3460", "Summer"]);