function skeleton(input) {
    let controlMinutes = Number(input[0]);
    let secondsOfControl = Number(input[1]);
    let lenght = Number(input[2]);
    let secondPerOneHund = Number(input[3]);
    let control = controlMinutes * 60 + secondsOfControl; // obrushame minutite v sekundi za kontrolnoto vreme
    let extraSeconds = (lenght / 120) * 2.5;
    let timeMarin = (lenght / 100) * secondPerOneHund - extraSeconds;
    if (timeMarin <= control) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${timeMarin.toFixed(3)}.`);
    } else {
        let diff = timeMarin - control;
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }

}
skeleton(["1",
"20",
"1546",
"12"])

