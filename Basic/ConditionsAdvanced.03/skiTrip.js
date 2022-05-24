function skiTrip(input) {
    let days = Number(input[0]);
    let room = input[1];
    let grade = input[2];
    let overnights = days - 1;
    let price = 0;
    switch(room) {
        case "room for one person":
            price = 18 * overnights;
            break;
        case "apartment":
            price = 25 * overnights;
            if (overnights < 10) {
                price = price * 0.70;
            } else if (overnights <= 15) {
                price = price * 0.65;
            } else {
                price = price * 0.50;
            }
            break;
        case "president apartment":
            price = 35 * overnights;
            if (overnights < 10) {
                price = price * 0.90;
            } else if (overnights <= 15) {
                price = price * 0.85;
            } else {
                price = price * 0.80;
            }
            break;
    }
    if (grade === "positive"){
        price = price * 1.25;
    } else {
        price = price * 0.90;
    }
    console.log(price.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"])

