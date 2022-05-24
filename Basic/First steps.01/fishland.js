function fishland(input){
    let priceMackerel = Number(input[0]);
    let priceCaca = Number(input[1]);
    let bonito = Number(input[2]);
    let scad = Number(input[3]);
    let mussels = Number(input[4]);
    let totalBonito = bonito * (priceMackerel * 1.6);
    let totalScad = scad * (priceCaca * 1.8);
    let total = (totalBonito + totalScad + mussels * 7.5).toFixed(2);

    console.log(total);

}
fishland(["5.55", "3.57", "4.3", "3.6", "7"])