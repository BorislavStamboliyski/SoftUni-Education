function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let grade = 1;
    let average = 0;
    let fail = 0;

    while(grade <= 12) {
        let grades = Number(input[index]);
       
        if (fail > 1){
            console.log(`${name} has been excluded at ${grade} grade`);
            break;
        }
        if (grades < 4) {
            fail++;
            continue;
        }
        average += grades;
        index++;
        grade++;
    }
    if (grade >=12){
    average = average / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
