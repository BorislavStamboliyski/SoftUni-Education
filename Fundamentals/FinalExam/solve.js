function solve(input) {
    let n = Number(input.shift());
    let myPlants = {};
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        if (myPlants.hasOwnProperty(plant)) {
            myPlants[plant][0] = Number(rarity);
        } else {
            myPlants[plant] = [];
            myPlants[plant].push(Number(rarity));
            myPlants[plant].push(0);
        }
    }
    let index = 0;
    let [command, tokens] = input[index].split(': ');
    while (command !== 'Exhibition') {
        switch (command) {
            case 'Rate':
                let [plant, rating] = tokens.split(' - ');
                if (myPlants.hasOwnProperty(plant)) {
                    let oldRate = Number(myPlants[plant][1]);
                    if (oldRate === 0) {
                        myPlants[plant][1] = Number(rating);
                    } else {
                        myPlants[plant][1] = (oldRate + Number(rating)) / 2;
                    }
                } else {
                    console.log('error');
                }
                break;
            case 'Update':
                let [newPlant, rarity] = tokens.split(' - ');
                if (myPlants.hasOwnProperty(newPlant)) {
                    myPlants[newPlant][0] = Number(rarity);
                } else {
                    console.log('error');
                }
                break;
            case 'Reset':
                if (myPlants.hasOwnProperty(tokens)) {
                    myPlants[tokens][1] = 0;
                } else {
                    console.log('error')
                }
                break;
        }
        index++;
        [command, tokens] = input[index].split(': ');
    }
    console.log(`Plants for the exhibition:`);
    for (const plant in myPlants) {
        console.log(`- ${plant}; Rarity: ${myPlants[plant][0]}; Rating: ${myPlants[plant][1].toFixed(2)}`);
    }
}


solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
