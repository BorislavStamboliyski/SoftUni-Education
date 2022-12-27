function heroesOfCodeAndLogic(gameDetails) {
    let numberOfHeroes = Number(gameDetails.shift(''));
    let myHeroes = [];
    for (let i = 0; i < numberOfHeroes; i++) {
        let token = gameDetails.shift('').split(' ');
        myHeroes.push({ hero: token[0], hp: Number(token[1]), mp: Number(token[2]) });
    }
    let index = 0;
    let line = gameDetails[index];
    while (line !== 'End') {
        let [command, firstParam, secondParam, thirParam] = line.split(" - ");
        switch (command) {
            case 'CastSpell':
                myHeroes.forEach(element => {
                    if (element.hero === firstParam) {
                        if (element.mp >= Number(secondParam)) {
                            element.mp -= Number(secondParam);
                            console.log(`${element.hero} has successfully cast ${thirParam} and now has ${element.mp} MP!`);
                        } else {
                            console.log(`${element.hero} does not have enough MP to cast ${thirParam}!`);
                        }
                    }
                });
                break;
            case 'TakeDamage':
                myHeroes.forEach(element => {
                    if (element.hero === firstParam) {
                        if ((element.hp - Number(secondParam)) > 0) {
                            element.hp -= Number(secondParam)
                            console.log(`${element.hero} was hit for ${secondParam} HP by ${thirParam} and now has ${element.hp} HP left!`);
                        } else {
                            console.log(`${element.hero} has been killed by ${thirParam}!`);
                            let indexOfElement = myHeroes.indexOf(element);
                            myHeroes.splice(indexOfElement, 1);
                        }
                    }
                });
                break;
            case 'Recharge':
                myHeroes.forEach(element => {
                    if (element.hero === firstParam) {
                        let tempMana = element.mp;
                        element.mp += Number(secondParam);
                        if (element.mp > 200) {
                            element.mp = 200
                        }
                        console.log(`${element.hero} recharged for ${element.mp - tempMana} MP!`);
                    }
                });
                break;
            case 'Heal':
                myHeroes.forEach(element => {
                    if (element.hero === firstParam) {
                        let tempHealth = element.hp;
                        element.hp += Number(secondParam);
                        if (element.hp > 100) {
                            element.hp = 100;
                        }
                        console.log(`${element.hero} healed for ${element.hp - tempHealth} HP!`);
                    }
                });
                break;
        }
        index++;
        line = gameDetails[index];
    }
    myHeroes.forEach(element => {
        console.log(`${element.hero}
  HP: ${element.hp}
  MP: ${element.mp}`)
    });
}

// heroesOfCodeAndLogic(['2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//    'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
//     ])

heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])