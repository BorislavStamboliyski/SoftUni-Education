function addBaggs(input) {
    let priceLuggage = Number(input[0]); // cena za nad 20 kg
    let luggageWeight = Number(input[1]);
    let days = Number(input[2]);
    let countLuggage = Number(input[3]);
    let price = 0.0;
    if (luggageWeight < 10) {
        price = priceLuggage * 0.2;
      if (days < 7) {
        price = price * 1.4;
     } else if (days >= 7 && days <= 30){
        price = price * 1.15;
     } else {
        price = price * 1.1;
        } 
    } else if (luggageWeight >= 10 && luggageWeight <= 20 ) {
        price = priceLuggage / 2 ;
    if (days < 7) {
        price = price * 1.4;
     } else if (days >= 7 && days <= 30){
        price = price * 1.15;
     } else {
        price = price * 1.1;
        } 
    } else {
        price = priceLuggage;
        if (days < 7) {
            price = price * 1.4;
         } else if (days >= 7 && days <= 30){
            price = price * 1.15;
         } else {
            price = price * 1.1;
            } 
    }
    let totalprice = price * countLuggage;
    console.log(`The total price of bags is: ${totalprice.toFixed(2)} lv. `)
}
addBaggs(["63.80",
"23",
"3",
"1"])
