function heroesOfCodeAndLogic(data) {

    let heroesParty = {};
    let heroesCount = Number(data.shift());

    for (let i = 0; i < heroesCount; i++) {
        let [name, hp, mp] = data.shift().split(' ');

        heroesParty[name] = {hp: Number(hp), mp: Number(mp)};
    }
    let commandInfo = data.shift().split(' - ');
    let command = commandInfo.shift();
    let hero = commandInfo.shift();
    
    while (command != 'End') {
        switch (command) {

            case 'CastSpell':
                let manaCost = Number(commandInfo[0]);
                let spellName = commandInfo[1];

                if (heroesParty[hero].mp >= manaCost) {
                    heroesParty[hero].mp -= manaCost;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${heroesParty[hero].mp} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
            break;

            case 'TakeDamage':
                let dmg = Number(commandInfo[0]);
                let attacker = commandInfo[1];

                heroesParty[hero].hp -= dmg;
                if (heroesParty[hero].hp <= 0) {
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete heroesParty[hero];
                } else {
                    console.log(`${hero} was hit for ${dmg} HP by ${attacker} and now has ${heroesParty[hero].hp} HP left!`);
                }
            break;

            case 'Recharge':
                let manaPotion = Number(commandInfo[0]);
                let manaRecharg = heroesParty[hero].mp + manaPotion <= 200 ? manaPotion : 200 - heroesParty[hero].mp;

                heroesParty[hero].mp += manaRecharg;
                console.log(`${hero} recharged for ${manaRecharg} MP!`);
            break;

            case 'Heal':
                let healPotion = Number(commandInfo[0]);
                let healRecharg = heroesParty[hero].hp + healPotion <= 100 ? healPotion : 100 - heroesParty[hero].hp;

                heroesParty[hero].hp += healRecharg;
                console.log(`${hero} healed for ${healRecharg} HP!`);
            break;           
        }
        commandInfo = data.shift().split(' - ');
        command = commandInfo.shift();
        hero = commandInfo.shift();
    }

    for (let hero in heroesParty) {
        console.log(`${hero}`);
        console.log(`  HP: ${heroesParty[hero].hp}`);
        console.log(`  MP: ${heroesParty[hero].mp}`);
    }
}


heroesOfCodeAndLogic([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ])
    console.log('----------------------------------------------------------------');
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ])