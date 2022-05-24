function godzillavsKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let dress = Number(input[2]);     // obleklo za 1 statist
    let decor = budget * 0.1;
    let totaldress;
    if (statists >= 150) {
        let costsForDress = statists * (dress * 0.9);
        totaldress = costsForDress + decor;
    } else { 
        totaldress = dress * statists + decor;
    }
    if (totaldress > budget) {
        let moneyNeeded = (totaldress - budget).toFixed(2);
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${moneyNeeded} leva more.`);
    } else {
        let moneyLeft = (budget - totaldress).toFixed(2);
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);        
    }
}
godzillavsKong(["9587.88",
"222",
"55.68"])



