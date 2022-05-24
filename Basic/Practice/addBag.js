function addBags(input) {
    let index = 0;
    let priceLuggage = Number(input[index]);
    index++;
    let luggageWeight = Number(input[index]);
    index++;
    let tripDays = Number(input[index]);
    index++;
    let countLuggages = Number(input[index]);
    index++;
    let price  = 0;
    let total = 0;
    if (luggageWeight < 10) {
        price = priceLuggage * 0.20;
    } else if (luggageWeight >= 10 && luggageWeight <= 20 ) {
        price = priceLuggage * 0.50;
    } else {
        price = priceLuggage;
    }

    if (tripDays < 7 ) {
        price += price * 0.40;
    } else if (tripDays >= 7 && tripDays <= 30 ){
        price += price * 0.15;
    } else {
        price += price * 0.10;
    }
    total = price * countLuggages
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}
addBags(["30",
"18",
"15",
"2"])


