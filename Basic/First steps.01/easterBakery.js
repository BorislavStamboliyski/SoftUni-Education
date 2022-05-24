function easterBakery(input){
    let priceFloor = Number(input[0]);
    let floor = Number(input[1]);
    let sugar = Number(input[2]);
    let boxWithEggs = Number(input[3]);
    let yeast = Number(input[4]);
    let priceSugar = priceFloor * 0.75;
    let priceEggs = priceFloor * 1.1;
    let priceYeast = priceSugar * 0.2;
    let totalFloor = floor * priceFloor;    
    let totalSugar = sugar * priceSugar;
    let totalEggs = boxWithEggs * priceEggs;
    let totalYeast = yeast * priceYeast;
    let total = (totalEggs + totalFloor + totalSugar + totalYeast).toFixed(2);

    console.log(total);

}
easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])

