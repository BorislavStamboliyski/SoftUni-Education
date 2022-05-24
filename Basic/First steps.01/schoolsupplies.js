function schoolsupplies(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);
    let sumpens = pens * 5.80
    let summarkers = markers * 7.20
    let sumliters = liters * 1.20
    let sum = sumpens + summarkers + sumliters;
    let final = sum - (sum * (discount/100));
    console.log(final);
}
schoolsupplies(["4", "2", "5", "13"])