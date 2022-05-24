function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let frontWalls = x * x * 2 - 1.2 * 2;
    let sideWalls = x * y * 2 - 2 * 1.5 * 1.5 ;
    let totalWalls = (frontWalls + sideWalls);
    let roof = 2 * x * y + 2 * (x * h / 2);
    let greenPaint = (totalWalls / 3.4).toFixed(2);
    let redPaint = (roof /4.3).toFixed(2);

    console.log(greenPaint);
    console.log(redPaint);
}
housePainting(["10.25", "15.45", "8.88"])