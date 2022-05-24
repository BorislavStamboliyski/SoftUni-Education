function vegetableMarket (input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let vegetables = Number(input[2]);
    let fruits = Number(input[3]);
    let total = ((priceFruits * fruits + priceVegetables * vegetables) / 1.94).toFixed(2);

    console.log(total);

}
vegetableMarket(["1.5", "2.5", "10", "10"])