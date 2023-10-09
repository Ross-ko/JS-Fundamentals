function dungeonestDark(input) {
    
    let rooms = input[0].split('|');
    let initialHealth = 100;
    let initialCoins = 0;
    let bestRoom = 1;

    for (let room of rooms) {

    let roomInfo = room.split(' ');
    let comand = roomInfo[0];
    let quantity = Number(roomInfo[1]);

    switch (comand) {
        case 'potion':

        let HP = initialHealth + quantity <= 100 ? quantity : 100 - initialHealth;
        initialHealth += HP;
        console.log(`You healed for ${HP} hp.`);
        console.log(`Current health: ${initialHealth} hp.`);
            break;

        case 'chest':

        initialCoins += quantity;
        console.log(`You found ${quantity} coins.`);
            break;

        default:
            
            initialHealth -= quantity;
            if (initialHealth <= 0) {
                console.log(`You died! Killed by ${comand}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            } else {
                console.log(`You slayed ${comand}.`);
            }
            break;
    }
    bestRoom++;
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('-------------------------------------------------------------------------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
console.log('-------------------------------------------------------------------------');
