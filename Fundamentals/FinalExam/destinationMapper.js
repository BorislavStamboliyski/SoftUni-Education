function destinationMapper(destinations) {
    let pattern = /([=/])(?<destination>[A-Z]{1}[A-z]{2,})\1/gm;
    let destinationList = [];
    let validDestination = pattern.exec(destinations);
    while(validDestination !== null) {
        destinationList.push(validDestination.groups['destination']);
        validDestination = pattern.exec(destinations);
    }
    let travelPoints = 0;
    destinationList.forEach(element => {
        travelPoints += Number(element.length);
    });
    console.log(`Destinations: ${destinationList.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper(("ThisIs some InvalidInput"))