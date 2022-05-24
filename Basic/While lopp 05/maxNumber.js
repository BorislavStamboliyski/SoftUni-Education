function maxNumber(input) {
    let max = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let nums = input[0];
    while(nums !== "Stop"){
        let num = Number(input[index]);
        if (num > max) {
            max = num
        }
        nums = input[index];
        index++;
    }
    console.log(max);
}
maxNumber(["-1",
"-2",
"Stop"])



