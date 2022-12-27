function adAstra(input) {
    let pattern = /([#|])(?<item>[A-z]+\ *[A-z]*)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;
    let totalCalories = 0;
    let foodInformation = [];
    let validData = pattern.exec(input);
    while(validData !== null) {
        let calories = Number(validData.groups['calories']);
        let item = validData.groups['item'];
        let date = validData.groups['date'];
        totalCalories += calories;
        foodInformation.push({item : item , day : date, cal : calories})
        validData = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
   
    for (let i =0 ; i <foodInformation.length; i++){
        console.log(`Item: ${foodInformation[i].item}, Best before: ${foodInformation[i].day}, Nutrition: ${foodInformation[i].cal}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )