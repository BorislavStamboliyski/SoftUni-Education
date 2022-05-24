function gymnastics(input) {
    let country = input[0];
    let device = input[1];
    let totalGrade = 0;
    let percentToMaxGrade = 0;

    switch(country) {
        case "Bulgaria":
            switch (device){
                case "ribbon": totalGrade = 9.600 + 9.400; break;
                case "hoop": totalGrade = 9.550 + 9.750; break;
                case "rope": totalGrade = 9.500 + 9.400; break;
            } 
        break;
        case "Russia":
            switch (device){
                case "ribbon": totalGrade = 9.100 + 9.400; break;
                case "hoop": totalGrade = 9.300 + 9.800; break;
                case "rope": totalGrade = 9.600 + 9.000; break;
            } 
        break;
        case "Italy":
            switch (device){
                case "ribbon": totalGrade = 9.200 + 9.500; break;
                case "hoop": totalGrade = 9.450 + 9.350; break;
                case "rope": totalGrade = 9.700 + 9.150; break;
            } 
        break;        
    }
    percentToMaxGrade = ((20 - totalGrade) / 20) * 100;
    console.log(`The team of ${country} get ${totalGrade.toFixed(3)} on ${device}.`);
    console.log(`${percentToMaxGrade.toFixed(2)}%`);
}   
gymnastics(["Russia", "rope"])