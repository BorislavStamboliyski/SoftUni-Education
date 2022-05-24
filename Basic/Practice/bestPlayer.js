function bestPlayer (input) {
    let index = 0 ;
    let name = "";
    let bestplayer = "";
    let gols = 0;

    while (name !== "END"){
        name = input[index];
        index++;
        let goals = Number(input[index]);
        index++;
        if (goals > gols) {
         bestplayer = name;
         gols = goals;
        }
        if (goals >= 10){
            break;
        }
    }
    console.log(`${bestplayer} is the best player!`)
    if (gols >= 3){
        console.log(`He has scored ${gols} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${gols} goals.`);
    }
}
bestPlayer(["Petrov",
"2",
"Drogba",
"11"])

