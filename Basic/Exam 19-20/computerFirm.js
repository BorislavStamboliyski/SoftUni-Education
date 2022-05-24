function computerFirm(input) {
    let index = 0;
    let countPcs = Number(input[index]);
    index++;
    let averageRating = 0;
    let sumRate = 0;
    let sales = 0;
    let rate = 0
    for (let i = 0; i < countPcs; i++) {
        let num = input[index];
        index++;
        rate = Number(num.charAt(2));
        let expectedSales = Number(num.charAt(0) + num.charAt(1));
        if (rate === 2) {
            sales += 0;
        } else if (rate === 3) {
            sales += (expectedSales * 0.5);
        } else if (rate === 4) {
            sales += (expectedSales * 0.7);
        } else if (rate === 5) {
            sales += (expectedSales * 0.85);
        } else {
            sales += expectedSales;
        }
        sumRate += rate;
    }
    averageRating = sumRate / countPcs;
    console.log(sales.toFixed(2));
    console.log(averageRating.toFixed(2));
}
computerFirm(["2",
"204",
"206"])


