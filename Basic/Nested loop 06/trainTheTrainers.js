function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let final = 0;
    let counter = 0;
    while (command !== "Finish") {
        let presentation = command;
        let averageGrade = 0;
        let grade = 0;
        for (let i = 0; i < jury; i++) {
            let currentGrade = Number(input[index]);
            grade += currentGrade;
            final += currentGrade;
            index++;
        }
        averageGrade = grade / jury;
        console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);
        command = input[index];
        index++;
        counter++;
    }
    final = final / (jury * counter);
    console.log(`Student's final assessment is ${final.toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
