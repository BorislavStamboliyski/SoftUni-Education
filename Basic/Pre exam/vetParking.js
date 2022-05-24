function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let totalsum = 0;
    let daysum = 0;
    for (let i = 1; i <= days; i++){
        for (let j = 1; j <= hours; j++){
            if (i % 2 === 0 && j % 2 === 1){
                daysum += 2.5;
            } else if ( i % 2 === 1 && j % 2 === 0) {
                daysum += 1.25;
            } else {
                daysum += 1;
            }
        }
        console.log(`Day: ${i} - ${daysum.toFixed(2)} leva`);
        totalsum += daysum;
        daysum = 0;
    }
    console.log(`Total: ${totalsum.toFixed(2)} leva`);
}
vetParking(["5", "2"])