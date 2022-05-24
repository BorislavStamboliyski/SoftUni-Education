function truckDriver(input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);
    sumPerKm = 0;
    total = 0;
    if (kmPerMonth <= 5000) {
        switch(season) {
            case "Spring":
            case "Autumn":
                sumPerKm = 0.75;
                break;
            case "Summer":
                sumPerKm = 0.90;
                break;
            case "Winter":
                sumPerKm = 1.05;
                break;
        }
    } else if (kmPerMonth <= 10000) {
        switch(season) {
            case "Spring":
            case "Autumn":
                sumPerKm = 0.95;
                break;
            case "Summer":
                sumPerKm = 1.10;
                break;
            case "Winter":
                sumPerKm = 1.25;
                break;
        }
    } else if (kmPerMonth <= 20000) {
        sumPerKm = 1.45;
    }
    total = (sumPerKm * kmPerMonth * 4 * 0.90).toFixed(2);
    console.log(total)
} 
truckDriver(["Autumn", "8600"])