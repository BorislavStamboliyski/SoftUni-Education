function sumOfTwoNumbers(input) {
    let index = 0;
    let start = Number(input[index]);
    index++;
    let end = Number(input[index]);
    index++;
    let magic = Number(input[index]);
    index++;
    let combination = 0;
    let noCombination = false;
    for (let i = start; i <= end; i++){
        
        for (let j = start; j <= end; j++){
            combination++;
            let sum = i + j;
            if (sum === magic) {
                console.log(`Combination N:${combination} (${i} + ${j} = ${magic})`);
                noCombination = true;
                break;
            }
        }
        if (noCombination != false){
            break;
        }
    }
    if (noCombination === false) {
        console.log(`${combination} combinations - neither equals ${magic}`);
    }
}
sumOfTwoNumbers(["88", 
"888", 
"2000"])
