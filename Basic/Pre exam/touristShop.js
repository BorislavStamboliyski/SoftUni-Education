function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let counterProducts = 0;
    let enoughMoney = true;
    let diff = 0;
    let totalPrice = 0;
    while (command !== "Stop") {
        let price = Number(input[index]);
        index++;
        counterProducts++;
        if (counterProducts % 3 === 0) {
            price -= (price / 2);
        }
        totalPrice += price;
        if (totalPrice > budget) {
            enoughMoney = false;
            break;
        }
        command = input[index];
        index++;
    }
    diff = Math.abs(totalPrice - budget);
    if (enoughMoney !== false || command === "Stop") {
        console.log(`You bought ${counterProducts} products for ${totalPrice.toFixed(2)} leva.`);
    } else {
        console.log(`You don't have enough money!`);
        console.log(`You need ${diff.toFixed(2)} leva!`);
    }
}
touristShop(["153.20", "Backpack", "25.20", "Shoes", "54", "Sunglasses", "30", "Stop"])

