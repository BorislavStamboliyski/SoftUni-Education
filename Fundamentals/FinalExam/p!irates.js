function pirates(input) {
    let targetCities = [];
    let index = 0;
    for (let i = 0; i < input.length; i++) {
        let token = input[i].split('||');
        let update = false;
        let indexOfUpdate = 0;
        if (token[0] === 'Sail') {
            break;
        }
        for (let i = 0; i < targetCities.length; i++) {
            if (targetCities[i].city === token[0]) {
                update = true;
                indexOfUpdate = i;
            }
        }
        if (update) {
            targetCities[indexOfUpdate].population += Number(token[1]);
            targetCities[indexOfUpdate].gold += Number(token[2]);
        } else {
            targetCities.push({ city: token[0], population: Number(token[1]), gold: Number(token[2]) });
        }
    }
    let lines = input[index];
    while (lines !== 'End') {
        let [command, city, people, gold] = lines.split('=>');
        switch (command) {
            case 'Plunder':
                targetCities.forEach(element => {
                    if (element.city === city) {
                        console.log(`${element.city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                        element.population -= Number(people);
                        element.gold -= Number(gold);
                        if (element.population <= 0 || element.gold <= 0) {
                            let indexOfElement = targetCities.indexOf(element);
                            console.log(`${element.city} has been wiped off the map!`);
                            targetCities.splice(indexOfElement, 1);
                        }
                    }
                });
                break;
            case 'Prosper':
                targetCities.forEach(element => {
                    if (element.city === city) {
                        if (Number(people) < 0) {
                            console.log(`Gold added cannot be a negative number!`);
                        } else {
                            element.gold += Number(people);
                            console.log(`${people} gold added to the city treasury. ${element.city} now has ${element.gold} gold.`);
                        }
                    }
                });
                break;
            default:
                break;
        }
        index++;
        lines = input[index];
    }
    let validTarget = false;
    if (targetCities.length > 0) {
        validTarget = true;
    }
    if (validTarget) {
        console.log(`Ahoy, Captain! There are ${targetCities.length} wealthy settlements to go to:`);
        targetCities.forEach(element => {
            console.log(`${element.city} -> Population: ${element.population} citizens, Gold: ${element.gold} kg`);
        });
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])


pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
)

