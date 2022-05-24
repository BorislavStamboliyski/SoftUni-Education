function fooddelivery(input) {
    let chicken = Number(input[0]);  // Pileshko menu
    let fish = Number(input[1]);     //menu riba
    let vegan = Number(input[2]);    // vegan menu
    let sumchicken = chicken * 10.35; // cena za x broi pileshki menuta
    let sumfish = fish * 12.40;       // cena za x broi ribni menuta
    let sumvegan = vegan * 8.15;      // cena za x broi vegan menuta
    let sum = sumchicken + sumfish + sumvegan; // obsha cena za menutata
    let desert = sum * (20/100);       // cena desert
    let bill = sum + desert + 2.50;
    console.log(bill);
}
fooddelivery(["9", "2", "6"])