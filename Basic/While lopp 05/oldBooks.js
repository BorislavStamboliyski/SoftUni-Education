function oldBooks(input){
    let book = input[0];
    let index = 1;
    let nextbook = input[index];
    let nobook = false;
    while (nextbook !== "No More Books") {  
        
        if (nextbook === book){
            nobook = true;  
            break;
        }   
        
        index++;
        nextbook = input[index];   

    }
    if (nobook !== true) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])

