function easterLunch(input){
    let easterBread = Number(input[0]);
    let boxWithEggs = Number(input[1]);
    let cookies = Number(input[2]);
    let paintForEggs = (boxWithEggs * 12) * 0.15;
    let priceBread = easterBread * 3.20;
    let priceEggs = boxWithEggs * 4.35;
    let priceCookies = cookies * 5.40;
    let total = (paintForEggs + priceBread + priceEggs + priceCookies).toFixed(2);
    
    console.log(total);

}
easterLunch(["4",
"4",
"3"])

