function easterParty(input) {
    let countGuests = Number(input[0]);
    let pricePerGuest = Number(input[1]);
    let budget = Number(input[2]);
    let priceCake = budget * 0.10;
    if (countGuests >=10 && countGuests <= 15) {
        let price = pricePerGuest * 0.85;
        let total = price * countGuests + priceCake;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`No party! ${diff.toFixed(2)} leva needed.`);
        }
    } else if (countGuests >15 && countGuests <= 20) {
        let price = pricePerGuest *0.80;
        let total = price * countGuests + priceCake;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`No party! ${diff.toFixed(2)} leva needed.`);
        }
    } else if (countGuests > 20) {
        let price = pricePerGuest * 0.75;
        let total = price * countGuests + priceCake;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`No party! ${diff.toFixed(2)} leva needed.`);
        }
    } else {
        let total = pricePerGuest * countGuests + priceCake;
        let diff = Math.abs(total - budget);
        if (total <= budget) {
            console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
        } else {
            console.log(`No party! ${diff.toFixed(2)} leva needed.`);
        }
    }

}
easterParty(["8",
"25",
"340"])



