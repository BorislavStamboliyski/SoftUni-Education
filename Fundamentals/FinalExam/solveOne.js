function solve(input) {
    let line = input.shift();
    let targetCities = new Map();
    while(line !== 'Sail') {
        let [city, population, gold] = line.split('||');
        if(targetCities.has(city)) {
            let oldPopulation = Number(targetCities.get(city)[0]);
            let oldGold = Number(targetCities.get(city)[1]);
            let newPop = oldPopulation + Number(population);
            let newGold = oldGold + Number(gold);
            targetCities.get(city)[0] = newPop;
            targetCities.get(city)[1] = newGold;
        } else {
            targetCities.set(city, []);
            targetCities.get(city).push(Number(population));
            targetCities.get(city).push(Number(gold));
        }
        line = input.shift();
    }
    
}

solve(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
