function backToThePast(input) {
    let index = 0;
    let heritage = Number(input[index]);
    index++;
    let livingYear = Number(input[index]);
    index++
    let age = 18 ;
    let spendMoney = 0;
    for (let i = 1800; i <= livingYear; i++) {
        if (i % 2 ===0){
            spendMoney += 12000;
            age++;
        } else {
            spendMoney +=(12000 + 50 * age);
            age++
        }
    }
    let diff = Math.abs(heritage - spendMoney);
    if (heritage >= spendMoney) {
        console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
    }
}
backToThePast(["100000.15", "1808"]);


