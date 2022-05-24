function movieProfit(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let days = Number(input[index]);
    index++;
    let tickets = Number(input[index]);
    index++;
    let priceTicket = Number(input[index]);
    index++;
    let percetnPerCinema = Number(input[index]);
    index++;
    let totalTickets = 0;
    let totalPrice = 0;
    let total = 0;

    totalTickets = days * tickets;
    totalPrice = totalTickets * priceTicket;
    total = totalPrice * ((100 - percetnPerCinema) / 100);

    console.log(`The profit from the movie ${movie} is ${total.toFixed(2)} lv.`);
    
}
movieProfit(["Python Basics", "40", "34785", "10.45", "14"])
