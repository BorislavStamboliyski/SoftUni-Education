function agencyProfit (input) {
    let index =0;
    let name = input[index];
    index++;
    let ticketsAdult = Number(input[index]);
    index++;
    let ticketsChildren = Number(input[index]);
    index++;
    let priceAdultticket = Number(input[index]);
    index++;
    let taxe = Number(input[index]);
    index++;
    let priceChildrenTicket = priceAdultticket * 0.30 ;
    let totalAdult = priceAdultticket + taxe;
    let totalChildren = priceChildrenTicket + taxe;
    let totalProfit = (totalAdult * ticketsAdult + totalChildren * ticketsChildren) * 0.20;
    console.log(`The profit of your agency from ${name} tickets is ${totalProfit.toFixed(2)} lv.`);

}
agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

