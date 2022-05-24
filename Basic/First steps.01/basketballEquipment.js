function basketballEquipment(input){
    let tax = Number(input[0]);
    let boots = tax - tax * 0.4;
    let equip = boots - boots * 0.2; 
    let ball = equip / 4 ;
    let access = ball / 5 ;
    let total = (tax + boots + equip + ball + access).toFixed(2);

    console.log(total)
}
basketballEquipment(["550"])