function firm(input) {
    let hours = Number(input[0]);  // chasovete neobhodimi za proekta
    let days = Number(input[1]);   // Dnite s koito firmata razpolaga
    let workers = Number(input[2]);
    let hoursForDays = days * 8;
    let workingHours = hoursForDays * 0.9;
    let extraHours = workers * (2 * days);
    let totalHours = Math.floor(workingHours + extraHours);
    let diff = Math.abs(hours - totalHours);

    if (totalHours >= hours) {
        console.log(`Yes!${diff} hours left.`);
    } else {
        console.log(`Not enough time!${diff} hours needed.`);
    }
    
}
firm(["50", "5", "2"]);