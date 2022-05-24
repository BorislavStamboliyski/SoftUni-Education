function trekkingMania(input) {
    let index = 0;
    let countGroups = Number(input[index]);
    index++;
    let percentMusala = 0;
    let percentMonblan = 0;
    let percentKilimandjaro = 0;
    let percentK2 = 0;
    let percentEverest = 0;
    let totalPeople = 0;
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    for (i = 0; i < countGroups; i++) {
        let countPeople = Number(input[index]);
        index++;
        totalPeople += countPeople;
        if (countPeople <= 5) {
            p1Counter += countPeople;
        } else if (countPeople <=12) {
            p2Counter += countPeople;
        } else if (countPeople <= 25) {
            p3Counter += countPeople;
        } else if (countPeople <= 40){
            p4Counter += countPeople;
        } else {
            p5Counter += countPeople;
        }
     }
     percentMusala = p1Counter / totalPeople * 100;
     percentMonblan = p2Counter / totalPeople * 100;
     percentKilimandjaro = p3Counter / totalPeople * 100;
     percentK2 = p4Counter / totalPeople * 100;
     percentEverest = p5Counter / totalPeople * 100;
     console.log(percentMusala.toFixed(2) + "%");
     console.log(percentMonblan.toFixed(2) + "%");
     console.log(percentKilimandjaro.toFixed(2) + "%");
     console.log(percentK2.toFixed(2) + "%");
     console.log(percentEverest.toFixed(2) + "%");
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
