function basketball(input) {
    let tax = Number(input[0]);
    let boots = tax - tax * 0.4 ; // cena za kecova
    let clothes = boots - boots * 0.2;  //cena za ekip
    let ball = clothes / 4 ; // Cena za topka
    let accesories = ball / 5; // cena za aksesoari
    let costs = tax + boots + clothes + ball + accesories; 
    console.log(costs);

}
basketball(["550"])