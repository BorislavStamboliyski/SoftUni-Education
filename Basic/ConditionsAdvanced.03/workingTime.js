function workingTime(input) {
    let time = Number(input[0]);
    let day = input[1];
    if (time >= 10 && time <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            default: 
                console.log("closed");
        }           
     } else {
         console.log("closed");
     }
}
workingTime(["11", "Sunday"]);