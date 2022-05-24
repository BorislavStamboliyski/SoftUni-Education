function flowerShop(input) {
    let countMagnolia = Number(input[0]);
    let countHyacinth = Number(input[1]);
    let countRoses = Number(input[2]);
    let countCactus = Number(input[3]);
    let priceGift = Number(input[4]);
    let total = (countMagnolia * 3.25 + countHyacinth * 4 + countRoses * 3.50 + countCactus * 8) * 0.95;
    if (total >= priceGift) {
        let diff = Math.floor(total - priceGift);
        console.log(`She is left with ${diff} leva.`);
    } else {
        let diff = Math.ceil(priceGift - total);
        console.log(`She will have to borrow ${diff} leva.`);
    }

}
flowerShop(["15", "7", "5", "10", "100"])