function dishwasher(input) {
    let index = 0;
    let bottles = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let detergent = bottles * 750;
    let counter = 1;
    let detergentEnough = true;
    let countDishes = 0;
    let countPots = 0;

    while (command !== "End") {
        let dishes = Number(command);
        if (counter != 3){
            detergent -= dishes * 5;
            countDishes += dishes;
            counter++;
        } else {
            detergent -= dishes * 15;
            countPots += dishes;
            counter = 1;
        }
        if (detergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
            detergentEnough = false;
            break;
        }
        command = input[index];
        index++;
    }
    if (detergentEnough != false) {
        console.log(`Detergent was enough!`);
        console.log(`${countDishes} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    }
}
dishwasher(["1", "10", "15", "10", "12", "13", "30"])
