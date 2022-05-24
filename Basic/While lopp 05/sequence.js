function sequence(input){
    let num = 1;
    let number = Number(input[0]);
    while(num <= number) {
        console.log(num);
        num = (num * 2) + 1 ;   
    }
}
sequence(["31"])