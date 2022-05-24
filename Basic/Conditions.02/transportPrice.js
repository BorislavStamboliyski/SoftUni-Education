function transportPrice(input) {
    let km = Number(input[0]);
    let time = input[1];
    let taxe = 0.0;
    if (km < 20) {
        if (time === "day") {
          taxe = (0.70 + km * 0.79).toFixed(2);
        } else if (time === "night") {
             taxe = (0.70 + km * 0.90).toFixed(2);
        }
    } else if (km < 100 ) {
        if (time === "day"){
         taxe = (km * 0.09).toFixed(2);
        } else if (time === "night"){
            taxe = (km * 0.09).toFixed(2);
        }
    } else {
        if (time === "day") {
         taxe = (km * 0.06).toFixed(2);
        } else if (time === "night"){
            taxe = (km * 0.06).toFixed(2);
        }

    }
    console.log(taxe);
}
transportPrice(["7", "night"])