function trainingLab(input){
    let w = Number(input[1]);
    let h = Number(input[0]);
    let wToCm = w * 100;
    let hToCm = h * 100;
    let area = wToCm - 100 ;
    let aretWide = Math.trunc(area / 70) ;
    let areaH = Math.trunc(hToCm / 120);
    let total = aretWide * areaH - 3;
    
    console.log(total);

}
trainingLab(["8.4", "5.2"])