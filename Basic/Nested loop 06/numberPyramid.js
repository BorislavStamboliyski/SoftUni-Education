function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    for (let rows = 1; rows <= n; rows++){
        let printLine = "";
        for (let cols = 1; cols <= rows; cols++){
            if (current > n) {
                isBigger = true;
                break;
            }
        printLine += current + " ";
        current++;
        }
    console.log(printLine);
    if (isBigger) {
        break;
    }
    }
}
numberPyramid(["15"]);