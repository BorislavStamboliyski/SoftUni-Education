function footballLeague(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let fans = Number(input[index]);
    index++;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;
    let percentA = 0;
    let percentB = 0;
    let percentV = 0;
    let percentG = 0;
    let totalPercent = 0;

    for (let i = 0; i < fans; i++) {
        let sector = input[index];
        index++;
        switch(sector){
            case "A": sectorA++; break;
            case "B": sectorB++; break;
            case "V": sectorV++; break;
            case "G": sectorG++; break;
        }
    }
    percentA = sectorA / fans * 100;
    percentB = sectorB / fans * 100;
    percentV = sectorV / fans * 100;
    percentG = sectorG / fans * 100;
    totalPercent = fans / capacity * 100;
    console.log(percentA.toFixed(2) + "%");
    console.log(percentB.toFixed(2) + "%");
    console.log(percentV.toFixed(2) + "%");
    console.log(percentG.toFixed(2) + "%");
    console.log(totalPercent.toFixed(2) + "%");
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);