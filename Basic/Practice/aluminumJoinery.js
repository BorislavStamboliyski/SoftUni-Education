function aluminumJoinery(input){
    let index = 0;
    let countJoinery = Number(input[index]);
    index++;
    let typeJoinery = input[index];
    index++;
    let typeDelivery = input[index];
    index++;
    let price = 0;
    if (countJoinery > 10) {
        switch (typeJoinery) {
            case "90X130" :
                if (countJoinery > 30 && countJoinery <= 60) {
                    price = countJoinery * (110 * 0.95);
                } else if (countJoinery > 60){
                    price = countJoinery * (110 * 0.92);
                } else {
                    price = countJoinery * 110;
                }
                 break;
            case "100X150":
                if (countJoinery > 40 && countJoinery <= 80) {
                    price = countJoinery * (140 * 0.94);
                } else if (countJoinery > 80){
                    price = countJoinery * (140 * 0.90);
                } else {
                    price = countJoinery * 140;
                }
                break;
            case "130X180" :
                if (countJoinery > 20 && countJoinery <= 50) {
                    price = countJoinery * (190 * 0.93);
                } else if (countJoinery > 50){
                    price = countJoinery * (190 * 0.88);
                } else {
                    price = countJoinery * 190;
                }
                break;
            case "200X300" :
                if (countJoinery > 25 && countJoinery <= 50) {
                    price = countJoinery * (250 * 0.91);
                } else if (countJoinery > 50){
                    price = countJoinery * (250 * 0.86);
                } else {
                    price = countJoinery * 250;
                }
                break;
        }
        if (typeDelivery === "With delivery") {
            price += 60;
        } 
        if (countJoinery > 99)
        price -= price * 0.04;

        console.log(`${price.toFixed(2)} BGN`);
    } else {
        console.log(`Invalid order`);
    }
}
aluminumJoinery(["105",
"100X150",
"With delivery"])



