function grades(input){

    let index = 0;
    let countStudents = Number(input[index]);
    index++;
    let excellent = 0;
    let good = 0;
    let average = 0;
    let fail = 0;
    let middleGrade = 0;
    let percentExcellent = 0;
    let percentGood = 0;
    let percentAverage = 0;
    let percentFail = 0;

    for (let i = 0; i < countStudents; i++){
        let grade = Number(input[index]);
        index++;;
        middleGrade += grade;
        if (grade < 3) {
            fail++;
        } else if (grade >= 3 && grade <= 3.99) {
            average++;
        } else if (grade >= 4 && grade <= 4.99) {
            good++;
        } else {
            excellent++
        }
    }
    middleGrade = middleGrade / countStudents;
    percentExcellent = excellent / countStudents * 100;
    percentGood = good / countStudents * 100;
    percentAverage = average / countStudents * 100;
    percentFail = fail / countStudents * 100;

    console.log(`Top students: ${percentExcellent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentGood.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentAverage.toFixed(2)}%`);
    console.log(`Fail: ${percentFail.toFixed(2)}%`);
    console.log(`Average: ${middleGrade.toFixed(2)}`);
}
grades(["6","2", "3", "4", "5", "6", "2.2"]);


