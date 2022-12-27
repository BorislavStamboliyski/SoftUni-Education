function thePianist(list) {
    let numberPieces = list.shift('');
    let myList = [];
    for (let i = 0; i < numberPieces; i++) {
        let temp = list.shift('').split('|')
        myList.push({ piece: temp[0], composer: temp[1], key: temp[2] });
    }
    let index = 0;
    let commmand = list[index];
    while (commmand !== 'Stop') {
        let token = list[index].split('|');
        let songInList = false;
        myList.forEach(element => {
            if (element.piece === token[1]) {
                songInList = true;
            }
        });
        switch (token[0]) {

            case 'Add': if (songInList) {
                console.log(`${token[1]} is already in the collection!`);
            } else {
                myList.push({ piece: token[1], composer: token[2], key: token[3] });
                console.log(`${token[1]} by ${token[2]} in ${token[3]} added to the collection!`);
            }
                break;
            case 'Remove': if (songInList) {
                for (let i = 0; i < myList.length; i++) {
                    if (myList[i].piece === token[1]) {
                        myList.splice(i, 1);
                        console.log(`Successfully removed ${token[1]}!`);
                    }
                }
            } else {
                console.log(`Invalid operation! ${token[1]} does not exist in the collection.`);
            }
                break;
            case 'ChangeKey': if (songInList) {
                for (let i = 0; i < myList.length; i++) {
                    if (myList[i].piece === token[1]) {
                        console.log(`Changed the key of ${myList[i].piece} to ${token[2]}!`);
                        myList[i].key = token[2];
                    }
                }
            } else {
                console.log(`Invalid operation! ${token[1]} does not exist in the collection.`);
            }
                break;
        }
        index++;
        commmand = list[index];
    }
    myList.forEach(element => {
        console.log(`${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`);
    })
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
);

console.log('-----------------');
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]
)