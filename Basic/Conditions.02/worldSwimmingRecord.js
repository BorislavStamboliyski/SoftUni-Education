function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);  // svetovern record v sekundi!!!
    let distance = Number(input[1]);     // razstoqnie v metri
    let timeForMeter = Number(input[2]); 
    let penaltyDistance = Math.floor(distance /  15);
    let totalTime = (timeForMeter * distance + penaltyDistance * 12.5).toFixed(2);
    if (totalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    } else {
        let  timeNeeded = (totalTime - worldRecord).toFixed(2);
        console.log(`No, he failed! He was ${timeNeeded} seconds slower.`)
    }
}
worldSwimmingRecord(["10464",
"1500",
"20"])
