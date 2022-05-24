function sleepyTomCat(input) {
    let vacationDays = Number(input[0]);
    let workingDays = 365 - vacationDays;
    let timePlay = vacationDays * 127 + workingDays * 63;
    
    let diff = Math.abs(timePlay - 30000);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;
    if (timePlay >= 30000) {

        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }

}
sleepyTomCat(["113"])