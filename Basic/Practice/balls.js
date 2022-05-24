function balls(input){
    let index = 0;
    let balls = Number(input[index]);
    index++;
    let points = 0
    let countred = 0;
    let countorange= 0;
    let countyellow = 0;
    let countwhite = 0;
    let countblack = 0;
    let count = 0;
    for (let i = 0; i < balls; i++ ){
        let color = input[index];
        switch(color){
            case "red":
                points += 5;
                countred++;
                break;
            case "orange" :
                points += 10
                countorange++;
                break;
            case "yellow":
                points += 15
                countyellow++;
                break;
            case "white":
                points += 20;
                countwhite++;
                break;
            case "black":
                points = Math.floor(points / 2);
                countblack++;
                break;
            default : count++;
        }
        index++;
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${countred}`);
    console.log(`Orange balls: ${countorange}`);
    console.log(`Yellow balls: ${countyellow}`);
    console.log(`White balls: ${countwhite}`);
    console.log(`Other colors picked: ${count}`);
    console.log(`Divides from black balls: ${countblack}`);
}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

