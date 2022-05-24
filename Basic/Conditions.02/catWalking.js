function catWalking(input) {
    let minutesPerDay = Number(input[0]);
    let countWalkingPerDay = Number(input[1]);
    let calories = Number(input[2]);
    let timeWalking = minutesPerDay * countWalkingPerDay;
    let walkCalories = timeWalking * 5;
    let halfCalories = calories / 2;
    if (walkCalories >= halfCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${walkCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${walkCalories}.`);
    }

}
catWalking(["40",
"2",
"300"])

