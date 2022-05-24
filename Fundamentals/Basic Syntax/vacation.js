function vacation(group,type,day) {
    let price;
    let total;
    switch(type){ 
        case 'Students': 
            if(day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }
        total = group * price;
        break;
        case 'Business':
            if(day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }
        total = group * price;
        break;
        case 'Regular':
            if(day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }
        total = group * price;
    }
    if (type === 'Students' && group >= 30) {
        total = total * 0.85;
    } else if ( type === 'Business' && group >= 100) {
        total = (total - 10 * price);
    } else if (type === 'Regular' && group >= 10 && group <= 20) {
        total = total * 0.95;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

vacation(30,"Students","Sunday");
vacation(40,"Regular","Saturday");