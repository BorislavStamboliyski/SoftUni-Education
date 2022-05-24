function salary(input) {

    let index = 0;
    let countTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;
    let haveMoney = true;
    
    for (i = 0; i < countTabs; i++) {
        let nameTabs = input[index];
        index++;
        switch(nameTabs) {
            case "Facebook": money -= 150; break;
            case "Instagram": money -= 100; break;
            case "Reddit": money -= 50; break;
        }

        if (money <= 0) {
            haveMoney = false;
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if (haveMoney){
        console.log(money);
    }

}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
