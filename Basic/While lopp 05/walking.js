function walking(input) {
    let goal = 10000;
    let index = 0;
    let steps = 0;

    while (index < input.length) {
        let text = input[index];
        if (text !== "Going home"){
            let dailySteps = Number(input[index]);
            steps += dailySteps;
            index++;
        } else {
            index++;
        }
        
        if (steps >= goal) {
            let diff = Math.abs(steps - goal);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }
    }
    let diff = Math.abs(steps - goal);
    if (steps < goal) {
        console.log(`${diff} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
