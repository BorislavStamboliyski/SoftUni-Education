function triagnleOfNumbers(num) {
    let text = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            text += i + ' ';
        }
        console.log(text);
        text = '';
    }
}

triagnleOfNumbers(3);
triagnleOfNumbers(5);
triagnleOfNumbers(6);