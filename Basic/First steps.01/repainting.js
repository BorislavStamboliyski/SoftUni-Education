function repainting(input) {
    let nylon = Number(input[0]);  // m
    let paint = Number(input[1]);  // liters
    let diluent = Number(input[2]); //liters
    let hours = Number(input[3]);   
    let sumnylon = (nylon + 2) * 1.50;  // cena nailon 
    let sumpaint = (paint + paint * 0.1) * 14.50;  // cena boq + 10%
    let sumdiluent = diluent * 5;           // cena razreditel
    let sumsupplies = sumnylon + sumpaint + sumdiluent + 0.40;  // cena materiali
    let sumworkers = sumsupplies * (30/100);            // cena za 1 chas
    let repainting = sumsupplies + sumworkers * hours;  // obshata suma
    console.log(repainting);
}
repainting(["5", "10", "10", "1"])