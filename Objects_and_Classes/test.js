function invetory(arr){
    let heroDataObj = {};
 
    for (let heroData of arr) {
        if()
        let [heroName, level, items] = heroData.split(" / ");
 
        let heroObj = {
            hero: heroName,
            level: Number(level),
            items: items
        };
 
        heroDataObj[heroName] = heroObj;
    }
 
    let heroNames = Object.keys(heroDataObj);
 
    heroNames.sort((a, b) => heroDataObj[a].level - heroDataObj[b].level);
 
    for (let heroName of heroNames) {
        console.log(`Hero: ${heroDataObj[heroName].hero}`);
        console.log(`level => ${heroDataObj[heroName].level}`);
        console.log(`items => ${heroDataObj[heroName].items}`);
 
    }
}

invetory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'] );