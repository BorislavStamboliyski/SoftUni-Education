function gameOfIntervals(input){
    let index = 0;
    let turns = Number(input[index]);
    index++;
    let res = 0 ;
    let counterp1 = 0 ;
    let counterp2 = 0;
    let counterp3 = 0;
    let counterp4 = 0;
    let counterp5 = 0;
    let counterp6 = 0;
    let percentP1 = 0;
    let percentP2 = 0;
    let percentP3 = 0;
    let percentP4 = 0;
    let percentP5 = 0;
    let percentP6 = 0;

    for (let i = 0; i < turns ; i++){
        let nums = Number(input[index]);
        index++;
        if (nums >=0 && nums <= 9){
            res += nums * 0.2;
            counterp1++;
        } else if (nums >9 && nums <= 19){
            res += nums * 0.3;
            counterp2++ 
        } else if (nums > 19 && nums <= 29){
            res += nums * 0.4;
            counterp3++;
        } else if (nums > 29 && nums <= 39){
            res += 50;
            counterp4++;
        } else if (nums > 39 && nums <= 50){
            res += 100;
            counterp5++;
        } else {
            res = res / 2;
            counterp6++;
        }
    }
    percentP1 = counterp1 / turns * 100;
    percentP2 = counterp2 / turns * 100;
    percentP3 = counterp3 / turns * 100;
    percentP4 = counterp4 / turns * 100;
    percentP5 = counterp5 / turns * 100;
    percentP6 = counterp6 / turns * 100;

    console.log(res.toFixed(2));
    console.log(`From 0 to 9: ${percentP1.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percentP2.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percentP3.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percentP4.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percentP5.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentP6.toFixed(2)}%`);
}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);

