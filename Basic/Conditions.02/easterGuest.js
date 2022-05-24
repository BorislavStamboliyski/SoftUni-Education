function easterGuests(input) {
    let countGuests = Number(input[0]);
    let budget = Number(input[1]);
    let countEasterBread = Math.ceil(countGuests / 3);
    let countEggs = countGuests * 2;
    let total = countEasterBread * 4 + countEggs * 0.45;
    let diff = Math.abs(total - budget);
    if (total <= budget) {
        console.log(`Lyubo bought ${countEasterBread} Easter bread and ${countEggs} eggs.`);
        console.log(`He has ${diff.toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }

}
easterGuests(["9",
"12"])
