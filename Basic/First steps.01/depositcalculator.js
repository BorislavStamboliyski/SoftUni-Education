function deposit(input) {
    let  depositsum = Number(input[0]);
    let  term = Number(input[1]);
    let  yearpercent = Number(input[2]);
    let  divident =  depositsum * (yearpercent/100);
    let  dividentpermonth = divident / 12 ;
    console.log(depositsum + term * dividentpermonth);
}
deposit(["2350", "6", "7"])