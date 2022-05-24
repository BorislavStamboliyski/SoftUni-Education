function yardgreening(input) {
    let area = Number(input[0]);
    let green = area * 7.61;
    let discount = green * 0.18;
    let sum = green - discount ; 
    console.log (`The final price is: ${sum} lv.`);
    console.log (`The discount is: ${discount} lv.`)

}
yardgreening(["150"])