function theImitationGame(messages) {
    let message = messages.shift();
    let result = [];
    let index = 0;
    for (const el of message) {
        result.push(el);
    }
    let command = messages[index];
    while (command !== 'Decode') {
        let token = command.split('|');
        let instruction = token.shift();
        switch (instruction) {
            case 'ChangeAll': let temp = result.map(element => {
                if (element === token[0]) {
                    return token[1]
                } else {
                    return element;
                }
            });
                result = temp;
                break;
            case 'Insert': if(Number(token[0]) >= 0 && Number(token[0]) <= result.length ) {result.splice(Number(token[0]), 0, token[1]);}
                break;
            case 'Move': let numberOfLetters = Number(token);
                for (let i = 0; i < numberOfLetters; i++) {
                    let temp = result.shift('');
                    result.push(temp);
                }
                break;
        }
        index++;
        command = messages[index];
    }
    console.log(`The decrypted message is: ${result.join('')}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]
)

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',]
)