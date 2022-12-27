function activationKeys(str) {
    let rawActivationCode = str.shift('');
    let index = 0;
    let line = str[index];
    while (line !== 'Generate') {
        let [command, firstParam, secondParam, thirParam] = line.split('>>>');
        switch (command) {
            case 'Slice':
                let firstHalf = rawActivationCode.slice(0, firstParam);
                let secondHalf = rawActivationCode.slice(secondParam, rawActivationCode.length);
                rawActivationCode = firstHalf + secondHalf;
                console.log(rawActivationCode);
                break;
            case 'Flip':
                let halfOne = rawActivationCode.slice(0, secondParam);
                let halfTwo = rawActivationCode.slice(thirParam, rawActivationCode.length);
                let temp = rawActivationCode.slice(secondParam, thirParam);
                if (firstParam === 'Upper') {
                    temp = temp.toUpperCase();
                } else {
                    temp = temp.toLowerCase();
                }
                rawActivationCode = halfOne + temp + halfTwo;
                console.log(rawActivationCode);
                break;
            case 'Contains': if (rawActivationCode.includes(firstParam)) {
                console.log(`${rawActivationCode} contains ${firstParam}`);
            } else {
                console.log(`Substring not found!`);
            }
                break;
            default: break;
        }
        index++;
        line = str[index];
    }
    console.log(`Your activation key is: ${rawActivationCode}`)
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

console.log('-----------------');

activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
