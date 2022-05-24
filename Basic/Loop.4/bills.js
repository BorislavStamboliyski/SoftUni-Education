function bills(input) {
    let index = 0 ;
    let months = Number(input[index]);
    index++;
    let water = 0;
    let ethernet = 0;
    let other = 0;
    let electricity = 0;
    let average = 0;
    for( let i = 0; i < months; i++){
        let electro = Number(input[index]);
        index++;
        electricity += electro;
        water += 20;
        ethernet += 15;
        other += (electro + 35) * 1.2;
    }
    average = (electricity + ethernet + water + other) / months;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${ethernet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
