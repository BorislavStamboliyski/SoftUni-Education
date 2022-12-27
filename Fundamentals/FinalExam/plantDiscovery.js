function plantDiscovery(plantList) {
    let plantNumbers = plantList.shift();
    let myPlants = [];
    for (let i = 0; i < plantNumbers; i++) {
        let token = plantList.shift('').split('<->');
        let update = false;
        let indexOfUpdate = 0;
        for(let i = 0; i < myPlants.length; i++) {
            if (myPlants[i].plant === token[0]) {
                update = true;
                indexOfUpdate = i;
            }
        }
        if (update) {
            myPlants[indexOfUpdate].rarity = Number(token[1]);
        } else {
        myPlants.push({ plant: token[0], rarity: Number(token[1]), rate: 0});   
        }
    }
    let index = 0;
    let command = plantList[index];
    while (command !== 'Exhibition') {
        let token = command.split(': ');
        let plantInList = false;
        let [currentPlant, rate] = token[1].split(' - ');
        myPlants.forEach(element => {
            if (element.plant === currentPlant) {
                plantInList = true;
            }
        });
        switch (token[0]) {
            case 'Rate':                          //•	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
                if (plantInList) {
                    myPlants.forEach(element => {
                        if (element.plant === currentPlant) {
                            let oldRate = Number(element.rate);
                            if(oldRate == 0) {
                                element.rate = Number(rate);
                            } else {
                                element.rate = (oldRate + Number(rate)) / 2;
                            }
                        }
                    });
                } else {
                    console.log(`error`);
                }
                break;
            case 'Update':                         //•	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
                if (plantInList) {
                    myPlants.forEach(element => {
                        if (element.plant === currentPlant) {
                            element.rarity = Number(rate);
                        }
                    });
                } else {
                    console.log('error');
                }
                break;
            case 'Reset':                          //Reset: {plant}" – remove all the ratings of the given plant
                if (plantInList) {
                    myPlants.forEach(element => {
                        if (element.plant === currentPlant) {
                            element.rate = 0;
                        }
                    });
                } else {
                    console.log('error');
                }
                break;
        }
        index++
        command = plantList[index];
    }
    console.log(`Plants for the exhibition:`)
    myPlants.forEach(element => {
        console.log(`- ${element.plant}; Rarity: ${element.rarity}; Rating: ${element.rate.toFixed(2)}`);
    });
}

plantDiscovery(["4",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Woodii<->5",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);

plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

