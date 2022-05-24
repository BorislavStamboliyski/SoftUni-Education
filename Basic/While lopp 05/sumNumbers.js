function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;

    while(sum < num) {
        let numbers = Number(input[index]);
        sum += numbers
        index++;
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
