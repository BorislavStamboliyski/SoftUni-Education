function birthdayParty(input){
    let taxeForHall = Number(input);
    let cake = taxeForHall * (20 / 100);
    let drinks = cake - (cake * 0.45);
    let animator = taxeForHall / 3 ;
    let costs = taxeForHall + cake + drinks + animator;
    
    console.log(costs);

}
birthdayParty(["3720"])