function triangleArea(input){
    let a = Number(input[0]);
    let h = Number(input[1]);
    let area = (a * h / 2).toFixed(2);
    
    console.log(area);

}
triangleArea(["1.23456", "4.56789"])