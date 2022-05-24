function sum(input){
    let dog = Number(input[0]);
    let cat = Number(input[1]);
    let sumdog = dog * 2.5;
    let sumcat = cat * 4;
    let sum = sumdog + sumcat
    console.log(`${sum} lv.`);
}
sum(["13","9"])