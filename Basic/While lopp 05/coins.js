function coins(input){
    let coin = 0;
    let change = Number(input[0]);

    while (change !== 0){                                               // moje s else if
        if ((change - 2) >= 0){
            change = (change - 2).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 1) >= 0) {
            change = (change - 1).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 0.5) >= 0){
            change = (change - 0.5).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 0.2) >= 0){
            change = (change - 0.2).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 0.1) >= 0) {
            change = (change - 0.1).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 0.05) >= 0){
            change = (change - 0.05).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 0.02) >= 0){
            change =(change - 0.02).toFixed(2);
            coin++;
            continue;
        }
        if ((change - 0.01) >= 0){
            change = (change - 0.01).toFixed(2);
            coin++;
            continue;
        }
        if (change == 0){
            console.log(coin);
            break;
        } 
    } 
}
coins(["2.73"])