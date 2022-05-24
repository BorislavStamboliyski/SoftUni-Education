function minNumber(input) {
    let min = Number.MAX_SAFE_INTEGER;
    let nums = input[0];
    let index = 0;
    while (nums != "Stop") {
        let num = Number(input[index]);
        if (num < min) {
            min = num;
        }
        nums = input[index];
        index++;
    }
    console.log(min);
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])

