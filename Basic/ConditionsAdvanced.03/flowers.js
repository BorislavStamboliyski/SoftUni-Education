function flowers(input) {
    let countChrysanthemum = Number(input[0]);
    let countRoses = Number(input[1]);
    let countTulips = Number(input[2]);
    let season = input[3];
    let day = input[4];
    let countFlowers = countChrysanthemum + countRoses + countTulips;
    let total = 0;
    let priceChrysanthemum = 0;
    let priceRoses = 0;
    let priceTulips = 0;
    let bouquet = 0;
    switch (season) {
        case "Spring":
        case "Summer":
            priceChrysanthemum = countChrysanthemum * 2.00;
            priceRoses = countRoses * 4.10;
            priceTulips = countTulips * 2.50;
            break;
        case "Autumn":
        case "Winter":
            priceChrysanthemum = countChrysanthemum * 3.75;
            priceRoses = countRoses * 4.50;
            priceTulips = countTulips * 4.15;
            break;
    }
    if (day === "Y"){
        priceChrysanthemum = priceChrysanthemum * 1.15;
        priceRoses = priceRoses * 1.15;
        priceTulips = priceTulips * 1.15;
    } 
    bouquet = priceChrysanthemum + priceRoses + priceTulips;
    if (season === "Spring" && countTulips >= 7){
        bouquet = bouquet * 0.95;
    }
    if (season === "Winter" && countRoses >= 10) {
        bouquet = bouquet * 0.90
    }
    if (countFlowers >= 20) {
        bouquet = bouquet * 0.80;
    }
    total = bouquet + 2.00;
    console.log(total.toFixed(2));
}
flowers(["10", "10", "10", "Autumn", "N"])