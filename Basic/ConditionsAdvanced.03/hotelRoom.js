function hotelRoom(input) {
    let month = input[0];
    let overnights = Number(input[1]);                                  
    let sumStudio = 0;
    let sumApartment = 0;
    switch(month) {
        case "May":
        case "October":
            sumStudio = 50;
            sumApartment = 65;
         if (overnights > 7 && overnights <= 14) {  
            sumStudio = (sumStudio * overnights)* 0.95;
        } else if (overnights > 14) {
            sumStudio = (sumStudio * overnights) * 0.70;
        } else {
            sumStudio = sumStudio * overnights;
        }
            break;
        case "June":
        case "September":
            sumStudio = 75.20;
            sumApartment = 68.70;
            if (overnights > 14) {
                sumStudio = (sumStudio * overnights) * 0.80;
            } else {
                sumStudio = sumStudio * overnights;
            }
            break;
        case "July":
        case "August":
            sumStudio = 76 * overnights;
            sumApartment = 77 ;
    }  
    if (overnights > 14) {
        sumApartment = (sumApartment * overnights) * 0.90;
    }  else {
        sumApartment = sumApartment * overnights;
    }
    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}
hotelRoom(["August",
"20"])

