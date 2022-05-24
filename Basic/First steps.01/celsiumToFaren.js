function celsiusToFahrenheit(input){
    let degreesCels = Number(input[0]);
    let degreesFahr = (degreesCels * (9/5) + 32).toFixed(2);

    console.log(degreesFahr);

}
celsiusToFahrenheit(["32.3"])