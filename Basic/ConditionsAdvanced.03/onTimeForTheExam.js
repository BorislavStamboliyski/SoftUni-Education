function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourStudent = Number(input[2]);
    let minStudent = Number(input[3]);
    let mExam = hourExam * 60 + minExam;
    let mStudent = hourStudent * 60 + minStudent;
    let time = "";
    let diff = Math.abs(mStudent - mExam);
    let h = Math.floor(diff / 60);
    let m = diff % 60;
    if (mStudent > mExam) {
        console.log("Late");
        if (h > 0 ) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if ( mStudent <= mExam && diff <= 30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log("Early") 
        if (h > 0){
            if (m < 10){
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
            
        } else {
            console.log(`${m} minutes before the start`);
        }
    }
}
onTimeForTheExam(["11",
"30",
"12",
"29"])



