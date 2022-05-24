function toyShop(input){
    let priceExcursion = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let sumtoys = puzzels + dolls + bears + minions + trucks; 
    let totalsum = puzzels * 2.6 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2 ; 
    let total;
    if (sumtoys >= 50) {
        let sum = totalsum * 0.75;
        total = sum * 0.9
    } else {
        total = totalsum * 0.9;
    }
    if (total >= priceExcursion){
        let moneyLeft = (total - priceExcursion).toFixed(2);
        console.log(`Yes! ${moneyLeft} lv left.`);
    }else {
         let moneyneeded = (priceExcursion - total).toFixed(2);
         console.log(`Not enough money! ${moneyneeded} lv needed.`);
    }
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])


