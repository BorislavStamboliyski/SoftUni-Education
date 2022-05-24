function mountainRun(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);
    let slowTime = Math.floor(distance / 50);
    let totalTime = distance * timeForMeter + slowTime * 30;
    if (totalTime < record) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = totalTime - record;
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }

}
mountainRun(["1377",
"389",
"3"])
