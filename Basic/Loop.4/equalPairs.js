function equalPairs(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    for (let i = 0; i < n; i++){
        let n1 = Number(input[index]);
        index++;
        let n2 = Number(input[index]);
        index++;
    }
}
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
