function everest(input) {
    let index = 0;
    let command = input[index];
    index++;
    let startDistance = 5364;
    let rest = "";
    let dayCounter = 1;
    let isReached = false;
    while (command !== "END") {
        rest = command;
        let mettersClimb = Number(input[index]);
        index++;
        if (rest === "Yes") {
            dayCounter++;
        }
        if (dayCounter > 5) {
            break;
        }
        startDistance += mettersClimb;
        if (startDistance >= 8848) {
            isReached = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (isReached) {
        console.log(`Goal reached for ${dayCounter} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${startDistance}`);
    }
}
everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])

