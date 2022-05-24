function pipesInPool(input) {
    let area = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let amountP1 = p1 * h;
    let amountP2 = p2 * h;
    let totalAmount = amountP1 + amountP2;

    if (totalAmount <= area) {
        let diff = (totalAmount / area) * 100;
        let percentP1 = (amountP1 / totalAmount) * 100;;
        let percentP2 = (amountP2 / totalAmount) * 100;
        console.log(`The pool is ${diff}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
        } else {
            let diff = totalAmount - area;
            console.log(`For ${h} hours the pool overflows with ${diff} liters.`);
        }
}
pipesInPool(["100", "100", "100", "2.5"]);
