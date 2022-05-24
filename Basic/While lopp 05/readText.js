function readText(input) {
    let index = 0;
    while(true){
        let text = input[index];
        if (text === "Stop") {
            break;
        }
        index++;
        console.log(text);
    }
    
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])
