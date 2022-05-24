function cinema(input) {
    let projection = input[0];
    let countRows = Number(input[1]);
    let countCollums = Number(input[2]);
    let incomes = 0;
    if (projection === "Premiere") {
        incomes = countCollums * countRows * 12.00;
    } else if (projection === "Normal") {
        incomes = countCollums * countRows * 7.50;
    } else if (projection === "Discount") {
        incomes = countCollums * countRows * 5.00;
    }
    console.log(`${incomes.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])

