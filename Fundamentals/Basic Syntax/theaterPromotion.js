function theaterPromotion(day,age) {
    let price;
    let isTrue = true;
    if (age >= 0 && age <= 18) {
        switch (day) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 5; break;
        }
    } else if (age > 18 && age <= 64) {
        switch (day) {
            case 'Weekday': price = 18; break;
            case 'Weekend': price = 20; break;
            case 'Holiday': price = 12; break;
        }
    } else if (age > 64 && age <= 122) {
        switch (day) {
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 10; break;
        }
    } else {
        isTrue = false;
    }
    if (isTrue) {
        console.log(price + '$');
    } else {
        console.log('Error!');
    }
}
theaterPromotion('Weekday', 42);
theaterPromotion('Holiday', -12);
theaterPromotion('Holiday', 15);