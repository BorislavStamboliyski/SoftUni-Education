function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let countGraders = Number(input[index]);
    index++;
    

    for (let i = 0; i < countGraders; i++) {
        let grader = input[index];
        index++;
        let point = input[index];
        index++;
        let  bonusPoints = grader.length * point / 2;
        points += bonusPoints;
        if (points > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        } 
    }
    let diff = Math.abs(points - 1250.5);
    if (points <= 1250.5){
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
