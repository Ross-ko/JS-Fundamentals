function inventory(data) {
    
    let herosData = [];

    for (let heroData of data) {

        let hero = heroData.split(' / ');
        let heroObj = {name: hero[0], level: Number(hero[1])};

        if (hero.length > 2) {

            for (i = 2; i < hero.length; i++) {

                heroObj['items'] = hero[i];
                
            }
        }
    
        herosData.push(heroObj);

    }
    
    herosData.sort((a, b) => a.level - b.level);

    for (let hero of herosData) {

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    }
}

inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

console.log('============================================================================================================');

inventory(['Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);