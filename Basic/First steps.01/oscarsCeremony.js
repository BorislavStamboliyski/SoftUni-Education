function oscarsCeremony(input){
    let taxeForHall = Number(input[0]);
    let statues = taxeForHall - (taxeForHall * 0.3);
    let catering = statues - (statues * 0.15);
    let sound = catering / 2 ;
    let totalCosts = taxeForHall + statues + catering + sound ;
    let costs = totalCosts.toFixed(2);


    console.log(costs);
}

oscarsCeremony(["5555"])