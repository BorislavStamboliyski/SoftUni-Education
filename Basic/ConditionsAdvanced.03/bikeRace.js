function bikeRace(input) {
    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let track = input[2];
    let taxeJuniors = 0;
    let taxeSeniors = 0; 
    let total = 0;                             
    switch(track) {
        case "trail":
            taxeJuniors = countJuniors * 5.50;
            taxeSeniors = countSeniors * 7;
            break;
        case "cross-country":
            taxeJuniors = countJuniors * 8;
            taxeSeniors = countSeniors * 9.50;
            if (countJuniors + countSeniors >= 50) {
                taxeJuniors = taxeJuniors * 0.75;
                taxeSeniors = taxeSeniors * 0.75;
            }
            break;
        case "downhill":
            taxeJuniors = countJuniors * 12.25;
            taxeSeniors = countSeniors * 13.75;
            break;
        case "road":
            taxeJuniors = countJuniors * 20;;
            taxeSeniors = countSeniors * 21.50;
            break;
    }
    total = (taxeJuniors + taxeSeniors) * 0.95;
    console.log(total.toFixed(2)); 
}
bikeRace(["3", "40", "road"])

