function multiplyTable(input) {
    let number = input[0];
    let num1 = Number(number.charAt(2));
    let num2 = Number(number.charAt(1));
    let num3 = Number(number.charAt(0));
    let multiply = 0;
    for (let i = 1; i <= num1; i++){
        for (let j = 1; j <= num2; j++){
            for(let k = 1; k <= num3; k++){
                multiply = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${multiply};`)
            }
        }
    }
}
multiplyTable(["222"]);