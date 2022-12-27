function emojiDetector(text) {
    let patterEmoji = /(:{2}|\*{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/gm;
    let patternAlphabet = /[A-z]/gm;
    let patterDigit = /\d/gm;
    let coolThreshold = 1;
    let str = text.join('');
    let validEmojes = [];
    let matches = str.match(patterDigit);
    for (const el of matches) {
        coolThreshold *= Number(el);
    }
    let validEmoji = patterEmoji.exec(text);
    while (validEmoji !== null) {
        validEmojes.push(validEmoji[0]);
        validEmoji = patterEmoji.exec(text);
    }
    let coolEmoji = [];
    for (let i = 0; i < validEmojes.length; i++) {
        let token = validEmojes[i].match(patternAlphabet).join('');
        let sum = 0;
        for (let k = 0; k < token.length; k++) {
            let asciNum = token.charCodeAt(k);
            sum += Number(asciNum);
        }
        if (sum >= coolThreshold) {
            coolEmoji.push(validEmojes[i])
        }
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojes.length} emojis found in the text. The cool ones are:
${coolEmoji.join('\n')}`)
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])

emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])