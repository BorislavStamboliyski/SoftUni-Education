function mirrorWords(input) {
    let pairWords = [];
    let mirrorWords = [];
    let pattern = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/gm;
    let validWords = pattern.exec(input);
    let counter  = 0;
    let result = '';
    let final = [];
    while(validWords !== null) {
        pairWords.push(validWords.groups['word1']);
        pairWords.push(validWords.groups['word2'])
        counter++;
        validWords = pattern.exec(input);
    }
    for(let i = 0; i < pairWords.length; i+=2){
        let firstWord = pairWords[i];
        let secondWord = pairWords[i + 1].split('').reverse().join('')
        if(firstWord === secondWord) {
            mirrorWords.push({wordOne : firstWord, wordTwo : pairWords[i + 1]});
        }
    } 
    if (pairWords.length == 0) {
        console.log(`No word pairs found!`);
        console.log('No mirror words!');
    } else {
        console.log(`${counter} word pairs found!`);
        if (mirrorWords.length == 0) {
            console.log(`No mirror words!`);
        } else {
            mirrorWords.forEach(element => {
                result = element.wordOne + ' <=> ' + element.wordTwo;
                final.push(result);
            });
            console.log(`The mirror words are:
${final.join(', ')}`);
        }
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]    
    )