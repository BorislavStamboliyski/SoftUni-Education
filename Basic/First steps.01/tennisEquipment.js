function tennisEquipment(input){
    let priceForRocket = Number(input[0]);
    let rockets = Number(input[1]);
    let boots = Number(input[2]);
    let priceForBoots = priceForRocket / 6;
    let sumBoth = (priceForBoots * boots) + (priceForRocket * rockets);
    let sum = sumBoth + sumBoth * 0.2;
    let sumNole = Math.floor(sum / 8) ;
    let sumSponsors = Math.ceil((sum * 7) / 8);

    console.log(`Price to be paid by Djokovic ${sumNole}`);
    console.log(`Price to be paid by sponsors ${sumSponsors}`);

}
tennisEquipment(["386", "7", "4"])