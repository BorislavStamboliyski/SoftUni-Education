function degustationParty(input) {
    let unlikedMeals = 0;
    let party = {};
    let index = 0;
    let line = input[index];
    while (line !== 'Stop') {
        let [command, guest, meal] = line.split('-');
        switch (command) {
            case 'Like':
                if (party.hasOwnProperty(guest)) {
                    let mealInCollection = false;
                    party[guest].forEach(element => {
                        if (element === meal) {
                            mealInCollection = true;
                        }
                    });
                    if (mealInCollection) {
                        break;
                    } else {
                        party[guest].push(meal);
                    }
                } else {
                    party[guest] = [];
                    party[guest].push(meal);
                }
                break;
            case 'Dislike':
                if (party.hasOwnProperty(guest)) {
                    let validMeal = false;
                    let indexOfElement;
                    party[guest].forEach(element => {
                        if (element === meal) {
                            validMeal = true;
                            indexOfElement = party[guest].indexOf(element);
                        }
                    });
                    if (validMeal) {
                        console.log(`${guest} doesn't like the ${meal}.`);
                        party[guest].splice(indexOfElement, 1);
                        unlikedMeals++;
                    } else {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${guest} is not at the party.`);
                }
                break;
        }
        index++;
        line = input[index];
    }
    for (const guest in party) {
        console.log(`${guest}: ${party[guest].join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikedMeals}`);

}

degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"])

    degustationParty(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"])
degustationParty(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])

