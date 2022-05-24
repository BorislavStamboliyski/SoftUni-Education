function figureArea(input){
    let name = input[0];
    let area;
    if (name === "square") {
        let a = Number(input[1]);
        area = a * a;
    } else if (name === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (name === "circle") {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r , 2);
    } else if (name === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2;
    }
    console.log(area.toFixed(3));
}
figureArea(["triangle", "4.5", "20"])