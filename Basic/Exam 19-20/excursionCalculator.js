function excursionCalculator(input) {
    let countPeople = Number(input[0]);
    let season = input[1];
    let excursion = 0;
    switch(season){
        case "spring": 
        if (countPeople <= 5) {
            excursion = countPeople * 50;
        } else {
            excursion = countPeople * 48;
        }
        break;
        case "summer":
            if (countPeople <= 5) {
             excursion = (countPeople * 48.50) * 0.85;
            } else {
            excursion = (countPeople * 45) * 0.85;
            }
            break;
        case "autumn":
            if (countPeople <= 5) {
                excursion = countPeople * 60;
               } else {
               excursion = countPeople * 49.50;
               }
               break;
        case "winter":
            if (countPeople <= 5) {
                excursion = (countPeople * 86) * 1.08;
               } else {
               excursion = (countPeople * 85) * 1.08;
               }
               break;
    }
    console.log(`${excursion.toFixed(2)} leva.`);
}
excursionCalculator(["20",
"winter"])

