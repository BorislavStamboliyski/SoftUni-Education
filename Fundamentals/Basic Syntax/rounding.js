function rounding(num, round) {
    let a = round
    if (round >= 15) {
        a = 15;
    }
    console.log(parseFloat(num.toFixed(a)));
}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);