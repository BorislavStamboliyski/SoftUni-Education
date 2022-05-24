function newHome(input) {
    let flowers = input[0];                                         //Роза	Далия	Лале	Нарцис	Гладиола
    let countflowers = Number(input[1]);                          // 	5	3.80	2.80    	3	  2.50
    let budget = Number(input[2]);
    let price = 0;
    switch (flowers) {                           //- "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"   
        case "Roses":
            if (countflowers > 80) {
                price = (countflowers * 5) * 0.90;
            } else {
                price = countflowers * 5;
            }
            break;
        case "Dahlias":
            if (countflowers > 90) {
                price = (countflowers * 3.80) * 0.85;
            } else {
                price = countflowers * 3.80;
            }
            break;
        case "Tulips":
            if (countflowers > 80) {
                price = (countflowers * 2.80) * 0.85;
            } else {
                price = countflowers * 2.80;
            }
            break;
        case "Narcissus":
            if (countflowers < 120) {
                price = (countflowers * 3.00) * 1.15;
            } else {
                price = countflowers * 3.00;
            }
            break;
        case "Gladiolus":
            if (countflowers < 80) {
                price = (countflowers * 2.50) * 1.20;
            } else {
                price = countflowers * 2.50;
            }
            break; 
    }   
    let diff = Math.abs(price - budget);
    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${countflowers} ${flowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}
newHome(["Narcissus",
"119",
"360"])
