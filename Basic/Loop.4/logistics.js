function logistics(input){
    let index = 0;
    let countCargo = Number(input[index]);
    index++;
    let percentBus = 0;
    let percentTruck = 0;
    let percentTrain = 0;
    let averagePriceCargo = 0;
    let totalCargo = 0;
    let pbus = 0;
    let ptruck = 0;
    let ptrain = 0;
    for (i = 0; i < countCargo; i++){
        let cargo = Number(input[index]);
        index++;
        if (cargo <= 3){
            totalCargo += cargo;
            pbus+= cargo;
        } else if(cargo >= 4 && cargo <= 11) {
            totalCargo += cargo;
            ptruck += cargo;
        } else {
            totalCargo += cargo;
            ptrain += cargo;
        } 
    }
    averagePriceCargo = (pbus * 200 + ptruck * 175 + ptrain * 120) / totalCargo;
    percentBus = pbus / totalCargo * 100;
    percentTruck = ptruck / totalCargo * 100;
    percentTrain = ptrain / totalCargo * 100;
    
    console.log(averagePriceCargo.toFixed(2));
    console.log(percentBus.toFixed(2) + "%");
    console.log(percentTruck.toFixed(2) + "%");
    console.log(percentTrain.toFixed(2) + "%");
}
logistics(["5", "2", "10", "20", "1", "7"])

