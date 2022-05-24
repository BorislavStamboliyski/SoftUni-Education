function poolDay(input){
    let people = Number(input[0]);
    let entryTaxe = Number(input[1]);
    let priceForChair = Number(input[2]);
    let priceForUmberella = Number(input[3]);
    let priceEntry = people * entryTaxe ;
    let chairs = Math.ceil(people * 0.75);
    let taxeChairs = chairs * priceForChair ;
    let umbrellas = Math.ceil(people / 2);
    let taxeUmbrellas = umbrellas * priceForUmberella;
    let sum = priceEntry + taxeChairs + taxeUmbrellas ;
    let costs = sum.toFixed(2);

    console.log(`${costs} lv.`);
}

poolDay(["50",
"6",
"8",
"4"])
