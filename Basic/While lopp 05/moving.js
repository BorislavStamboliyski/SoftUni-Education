function moving(input) {
    let index = 0;
    let wideFreeSpace = Number(input[index]);
    index++;
    let lengthFreeSpace = Number(input[index]);
    index++;
    let heigthFreeSpace = Number(input[index]);
    index++;
    let text = input[index];
    let freeSpace = wideFreeSpace * lengthFreeSpace * heigthFreeSpace;
    
    while(text != "Done"){
        text = input[index];
        if(text !== "Done"){
            let suitCase = Number(input[index]);
            index++;
            freeSpace -= suitCase;
        } else {
            console.log(`${freeSpace} Cubic meters left.`);
            break;
        }
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
