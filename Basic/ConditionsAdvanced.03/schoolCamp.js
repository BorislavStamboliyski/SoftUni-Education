function schoolCamp(input) {
    let season = input[0];
    let typrGroup = input[1];
    let countStudents = Number(input[2]);
    let overnights = Number(input[3]);
    let sport = ""
    let priceOvernight = 0;
    let totalPrice = 0;
    switch(season) {
        case "Winter":
            if (typrGroup === "mixed") {
                priceOvernight = 10.00;
                sport = "Ski";
            } else if (typrGroup === "girls") {
                priceOvernight = 9.60;
                sport = "Gymnastics";
            } else {
                priceOvernight = 9.60;
                sport = "Judo";
            }
            break;
        case "Spring":
            if (typrGroup === "mixed") {
                priceOvernight = 9.50;
                sport = "Cycling";
            } else if (typrGroup === "girls") {
                priceOvernight = 7.20;
                sport = "Athletics";
            } else {
                priceOvernight = 7.20;
                sport = "Tennis";
            }
            break;
        case "Summer":
            if (typrGroup === "mixed") {
                priceOvernight = 20.00;
                sport = "Swimming";
            } else if (typrGroup === "girls") {
                priceOvernight = 15.00;
                sport = "Volleyball";
            } else {
                priceOvernight = 15.00;
                sport = "Football";
            }
            break;
    }
    if (countStudents >= 50) {
        totalPrice = priceOvernight * overnights * countStudents * 0.50;
    } else if (countStudents >= 20) {
        totalPrice = priceOvernight * overnights * countStudents * 0.85;
    } else if (countStudents >= 10) {
        totalPrice = priceOvernight * overnights * countStudents * 0.95;
    } else {
        totalPrice = priceOvernight * overnights * countStudents;
    }
    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "mixed", "17", "14"]);