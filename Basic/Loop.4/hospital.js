function hospital(input) {
    let index = 0;
    let period = Number(input[index]);
    index++;
    let doctors = 7;
    let treated = 0;
    let notTreated = 0;
    for (let i = 1; i <= period; i++) {
        let patients = Number(input[index]);
        index++;
        if (i % 3 === 0 && notTreated >  treated){
            doctors += 1;
        }
        if (patients <= doctors){
            treated += patients;
        } else {
            notTreated += patients - doctors;
            treated += doctors;
        }
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${notTreated}.`);
}
hospital(["3", "7", "7", "7"]);


