function secretChat(messages) {
    let initianString = messages.shift('');
    let index = 0;
    let line = messages[index];
    while(line !== 'Reveal') {
        let [command, firstParam, secondParam] = line.split(':|:');
        switch(command) {
            case 'InsertSpace':           //o	Inserts a single space at the given index. The given index will always be valid.
            if (Number(firstParam) >= 0 && Number(firstParam) <= initianString.length) {
                let firstPart = initianString.slice(0, Number(firstParam));
                let secondPart = initianString.slice(Number(firstParam), initianString.length);
                initianString = firstPart + ' ' + secondPart;
                console.log(initianString);
            }
                break;
            case 'Reverse':       
                if (initianString.includes(firstParam)){
                    let firstPositionOfFirstParam = initianString.indexOf(firstParam);
                    let secondPositionOffirstParam = initianString.indexOf(firstParam) + (firstParam.length);
                    let firstPart = initianString.slice(0, firstPositionOfFirstParam);
                    let secondPart = initianString.slice(secondPositionOffirstParam, initianString.length);
                    let reverse = firstParam.split('').reverse().join('');
                    initianString = firstPart + secondPart + reverse;
                    console.log(initianString);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':        //o	Changes all occurrences of the given substring with the replacement text.
                let oldString = firstParam;
                let newString = secondParam;
                let pattern = new RegExp(oldString, 'g');
                initianString = initianString.replace(pattern, newString);
                console.log(initianString);
                break;     
        }
        index++;
        line = messages[index];
    }
    console.log(`You have a new text message: ${initianString}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )

  secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )