function needForSpeed(carList) {
    let numberOfCarsObtainable = Number(carList.shift(''));
    let myCars = [];
    for (let i = 0; i < numberOfCarsObtainable; i++) {
        let token = carList.shift('').split('|');
        myCars.push({ car: token[0], mileage: Number(token[1]), fuel: Number(token[2]) });
    }
    let index = 0;
    let line = carList[index];
    while (line !== 'Stop') {          // token[0] = command
        let token = line.split(' : ');
        switch (token[0]) {
            case 'Drive':           // token[1] = car   token[2] = distance  token[3] = fuel
                myCars.forEach(element => {
                    if (element.car === token[1]) {
                        if ((element.fuel - Number(token[3])) <= 0) {
                            console.log(`Not enough fuel to make that ride`);

                        } else {
                            element.mileage += Number(token[2]);
                            element.fuel -= Number(token[3]);
                            console.log(`${token[1]} driven for ${token[2]} kilometers. ${token[3]} liters of fuel consumed.`);
                        }
                    }
                    if (element.mileage >= 100000) {
                        console.log(`Time to sell the ${element.car}!`);
                        let indexOfElement = myCars.indexOf(element);
                        myCars.splice(indexOfElement, 1)
                    }
                })
                break;
            case 'Refuel':          // token [1] = car   token[2] = fuel       
                myCars.forEach(element => {
                    if (element.car === token[1]) {
                        let temp = element.fuel;
                        element.fuel += Number(token[2]);
                        if (element.fuel >= 75) {
                            element.fuel = 75
                            console.log(`${element.car} refueled with ${element.fuel - temp} liters`);
                        } else {
                            console.log(`${element.car} refueled with ${token[2]} liters`);
                        }
                    }
                });
                break;
            case 'Revert':         // token [1] = car  token[2] = kilometers
                myCars.forEach(element => {
                    if (element.car === token[1]) {
                        element.mileage -= Number(token[2]);
                        if (element.mileage < 10000) {
                            element.mileage = 10000;
                        } else {
                            console.log(`${element.car} mileage decreased by ${token[2]} kilometers`);
                        }
                    }
                })
                break;
        }
        index++;
        line = carList[index];
    }
    myCars.forEach(element => {
        console.log(`${element.car} -> Mileage: ${element.mileage} kms, Fuel in the tank: ${element.fuel} lt.`);
    })
}

// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   ])

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)