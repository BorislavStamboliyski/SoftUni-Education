function agencyProfit(input){
    let name = input[0];
    let ticketsForParents = Number(input[1]);
    let ticketsForChildren = Number(input[2]);
    let priceTicketForParents = Number(input[3]);
    let serviceTaxe = Number(input[4]);
    let priceTicketForChildren = priceTicketForParents - priceTicketForParents*0.7;
    let midPrice = priceTicketForParents + serviceTaxe ; 
    let midPriceForChildren = priceTicketForChildren + serviceTaxe;
    let finalPrice = (ticketsForParents * midPrice) + (midPriceForChildren * ticketsForChildren);
    let profit = finalPrice * 0.2;
    let newProfit = profit.toFixed(2);


    console.log(`The profit of your agency from ${name} tickets is ${newProfit} lv.`);
}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])


