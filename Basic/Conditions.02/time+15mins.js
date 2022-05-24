function time15mins(input) {
    let hours = Number(input[0]);
    let mins = Number(input[1]);
    let mins15 = mins + 15;
    let hour;
    let minute;
    if (mins15 < 60) {
        hour = hours;
        minute = mins15;
    } else {
        let  hourse = hours + Math.floor(mins15 /60);
        let minutes = mins15 % 60 ;
        if (hourse < 24) {
            hour = hourse;
        } else {
            hour = hourse - 24;;
        } 
        if (minutes < 10){
            minute = "0" + minutes;
        } else {
            minute = minutes;
        }
    }

    console.log(`${hour}:${minute}`);
}
time15mins(["1", "46"])