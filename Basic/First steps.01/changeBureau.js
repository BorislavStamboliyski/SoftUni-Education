function changeBureau(input){
    let bitcoins = Number(input[0]);
    let chineseUan = Number(input[1]);
    let commision = Number(input[2]);
    let valueBitcoins = bitcoins * 1168; // cena bitkoin v leva
    let valueUans = chineseUan * 0.15;   // cena uan v dolari
    let usdLev    = valueUans * 1.76 ;  //  dollari to levs
    let sumLeva  = valueBitcoins + usdLev ;  // obshot leva
    let euro    = sumLeva / 1.95 ;    // levove to euro
    let changeCommision = euro * (commision / 100); 
    let finalEuro  = euro - changeCommision; 
    let final = finalEuro.toFixed(2);

    console.log(final);
}

changeBureau(["20",
"5678",
"2.4"])
