function tennisRanklist(input){
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let points = 0;
    let p1counter = 0;
    let percentWins = 0;
    for (i = 0; i < countTournaments; i++) {
        let posistion = input[index];
        index++;
        switch (posistion) {
            case "W":
                points += 2000;
                p1counter += 1;
                break;
            case "F": 
                points += 1200;
                break;
            case "SF": 
                points += 720;
                break;
        } 
    }
    percentWins = p1counter / countTournaments * 100;
    let averagePoints = Math.floor(points / countTournaments);
    points += startPoints;
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(percentWins.toFixed(2) + "%");
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


