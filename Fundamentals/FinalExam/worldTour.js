function worldTour(tour) {
    let myStops = tour.shift('');
    let index = 0;
    let commmand = tour[index];
    while (commmand !== 'Travel') {
        let temp = ''
        let token = commmand.split(':');
        switch (token[0]) {
            case 'Add Stop': if (Number(token[1]) >= 0 && Number(token[1]) <= myStops.length) {
                let firstHalf = myStops.substring(0, Number(token[1]));
                let secondHalf = myStops.substring(Number(token[1]), myStops.length);
                temp = firstHalf + token[2] + secondHalf;
                myStops = temp
            }
            console.log(myStops);
                break;
            case 'Remove Stop':
                if (Number(token[1]) >= 0 && Number(token[1]) <= myStops.length && Number(token[2]) >= 0 && Number(token[2]) <= myStops.length) {
                    let firstHalf = myStops.substring(0, Number(token[1]));
                    let secondHalf = myStops.substring(Number(token[2]) + 1, myStops.length);
                    temp = firstHalf + secondHalf;
                    myStops = temp
                }
                console.log(myStops);
                break;
            case 'Switch':
                let oldValue = token[1];
                let newValue = token[2];
                let pattern = new RegExp(oldValue, 'g') 
                myStops = myStops.replace(pattern, newValue) 
            
            console.log(myStops);
            
                break;
        }
        index++;
        commmand = tour[index];
    }
    console.log(`Ready for world tour! Planned stops: ${myStops}`);
}

// worldTour((["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"])
// )
console.log('-----------------')
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel']))