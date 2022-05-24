function footballKit(input) {
    let priceTshirt = Number(input[0]);
    let sumForBall = Number(input[1]);
    let priceShorts = priceTshirt * 0.75;
    let priceSocks = priceShorts * 0.20;
    let priceBoots = (priceTshirt + priceShorts) * 2;
    let totalCosts = (priceTshirt + priceShorts + priceSocks + priceBoots) * 0.85;
    if (totalCosts >= sumForBall){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalCosts.toFixed(2)} lv.`);
    } else {
        let diff = sumForBall - totalCosts;
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }

}
footballKit(["59.99",
"500"])

