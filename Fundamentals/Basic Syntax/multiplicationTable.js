function multiplicationTable(n) {
    let a = 0;
    for (let i = 1; i <= 10; i++) {
        a = n * i;
        console.log(`${n} X ${i} = ${a}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);