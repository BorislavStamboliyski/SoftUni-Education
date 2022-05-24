function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let counter = 0;
    let counterPermovie = 0;
    let studentTicket = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let percentStudets = 0;
    let percentStandard = 0;
    let percentKids = 0;

    while (command !== "Finish") {
        let movie = command;
        let spaces = Number(input[index]);
        index++;
        let tickets = input[index];
        index++;
        let percent = 0;
        while (tickets !== "End") {
            counter++;
            counterPermovie++;
            switch (tickets) {
                case "student": studentTicket++; break;
                case "standard": standardTickets++; break;
                case "kid": kidsTickets++; break;
            }
            if (counterPermovie >= spaces || tickets === "Finish") {
                break;
            }
            tickets = input[index];
            index++;
        }
        percent = counterPermovie / spaces * 100;
        console.log(`${movie} - ${percent.toFixed(2)}% full.`);
        command = input[index];
        counterPermovie = 0;
        index++;
    }
    percentStudets = studentTicket / counter * 100;
    percentStandard = standardTickets / counter * 100;
    percentKids = kidsTickets / counter * 100;
    console.log(`Total tickets: ${counter}`);
    console.log(`${percentStudets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
