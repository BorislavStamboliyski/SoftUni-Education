function bossRush(data) {
    let n = Number(data.shift());
    let pattern = /\|[A-Z]{4,}\|:#[A-z]+\ [A-z]+#/gm;
    let bossName = /\|(?<boss>[A-Z]{4,})\|/gm;
    let titleName = /#(?<title>[A-z]+\ [A-z]+)#/gm;
    for (let i = 0; i < n; i++) {
        let validData = pattern.test(data[i]);
        if (validData) {
            let validName = data[i].match(bossName);
            let validTitle = data[i].match(titleName);
            let boss = validName[0];
            let titleOne = validTitle[0];
            let bossname = '';
            let title = '';
            for (let el of boss) {
                if (el === '|') {
                    bossname += ''
                } else {
                    bossname += el;
                }
            }
            for (let el of titleOne) {
                if (el === '#') {
                    title += "";
                } else {
                    title += el;
                }
            }
            console.log(`${bossname}, The ${title}
            >> Strength: ${bossname.length}
            >> Armor: ${title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])

