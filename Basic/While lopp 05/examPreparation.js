function examPreparation(input) {
    let index = 0;
    let fails = Number(input[index]);
    index++;
    let average = 0;
    let counter = 0;
    let fail = 0;
    let message = input[index];
    let lastproblem = ""
    while (true) {
        message = input[index];
        index++;
        let grade = Number(input[index]);
        index++;;
        if (message === "Enough") {
            break;
        } else {
            lastproblem = message;
        }
        if (grade <= 4){
            fail++;
            average += grade;
            counter++;
            continue;
        }
        if (fails === fail){
            console.log(`You need a break, ${fail} poor grades.`);
            break;
        }
        average += grade;
        counter++;
        
    }
    if (fail < fails){
        average = average / counter;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastproblem}`);
    }
}   
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
