function circleAreaAndPerimeter(input){
    let r = Number(input[0]);
    let s = (Math.PI * Math.pow(r , 2)).toFixed(2);
    let p = (2 * Math.PI * r).toFixed(2);

    console.log(s);
    console.log(p);

}
circleAreaAndPerimeter(["4.5"])