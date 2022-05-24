function cake(input){
    let index = 0;
    let widecake = Number(input[index]);
    index++;
    let lengthCake = Number(input[index]);
    index++;
    let cake = widecake * lengthCake;
    let text = input[index];
    while (text !== "STOP") {
        text = input[index];
        if (text !== "STOP") {
        let pieces = Number(input[index]);
        index++;
        cake -= pieces;
       } else {
           console.log(`${cake} pieces are left.`);
           break;
       }
       if(cake <= 0){
           let diff = Math.abs(cake)
           console.log(`No more cake left! You need ${diff} pieces more.`);
           break;
       }
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
