function movieProfit(input){
    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percetageForCinema = Number(input[4]);
    let pricePerDay = priceTicket * tickets;
    let totalPrice = pricePerDay * days;
    let dividentForCinema = totalPrice * (percetageForCinema / 100);
    let dividents = (totalPrice - dividentForCinema).toFixed(2);

    console.log(`The profit from the movie ${name} is ${dividents} lv.`)
}

movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])
