function passwordReset (input) {
    let password = input.shift('');
    let index = 0;
    let line = input[index];
    while(line !== 'Done') {
        let [command, firstParam, secondParam] = line.split(' ');
        switch(command) {
            case 'TakeOdd' : 
            let temp = '';
            for(let i = 0; i < password.length; i++) {
                if(i % 2 != 0) {
                    temp += password[i];
                }
               
            }
            password = temp;
            console.log(password);
                break;
            case 'Cut':
                let firstHalf = password.slice(0, firstParam) ;
                let secondHalf = password.slice(Number(firstParam) + Number(secondParam), password.length);
                password = firstHalf + secondHalf;
                console.log(password) 
                break;
            case 'Substitute' :
                if (password.includes(firstParam)) {
                    let oldString = firstParam;
                    let newString = secondParam;
                    let pattern = new RegExp(oldString ,'gm');
                    password = password.replace(pattern, newString);
                    console.log(password)
                } else {
                    console.log(`Nothing to replace!`)
                }
                break;
        }
        index++;
        line = input[index];
    }
    console.log(`Your password is: ${password}`)
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
