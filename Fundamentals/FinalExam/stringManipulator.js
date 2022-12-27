function stringManipulator(input) {
    let inianStr = input.shift();
    let index = 0;
    let token = input[index];
    while (token !== 'End') {
        let [command, firstParam, secondParam] = token.split(' ')
        switch (command) {
            case 'Translate':
                let oldValue = firstParam;
                let newValue = secondParam;
                let pattern = new RegExp(oldValue, 'g');
                inianStr = inianStr.replace(pattern, newValue);
                console.log(inianStr);
                break;
            case 'Includes':
                if (inianStr.includes(firstParam)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                if (inianStr.startsWith(firstParam)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                inianStr = inianStr.toLowerCase();
                console.log(inianStr)
                break;
            case 'FindIndex':
                let lastIndex = inianStr.lastIndexOf(firstParam);
                console.log(lastIndex);
                break;
            case 'Remove':
                if (!inianStr[Number(firstParam)]) {
                    break;
                } else {
                    let temp = inianStr.substring(Number(firstParam), (Number(firstParam) + Number(secondParam)));
                    inianStr = inianStr.replace(temp, "");
                    console.log(inianStr);
                }
                break;
        }
        index++;
        token = input[index];
    }
}

stringManipulator(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
console.log('-----------------')
stringManipulator(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])

