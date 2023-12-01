function plantDiscovery(data) {

    let plantNum = Number(data.shift());
    let plants = {};

    for (let i = 0; i < plantNum; i++) {
        let [plant, rarity] = data.shift().split('<->');

        if (plant in plants) {
            plants[plant] += Number(rarity);
        } else {
            plants[plant] = {rarity: Number(rarity), rating: 0, counter: 0};
        }
    }

    let commandLine = data.shift();

    while (commandLine != 'Exhibition') {     
        let [command, commandInfo] = commandLine.split(': ');

        if (command == 'Rate') {
            let [plant, rating] = commandInfo.split(' - ');

            if (plant in plants) {
                plants[plant].rating += Number(rating);
                plants[plant].counter++;
            } else {
                console.log('error');
            }
        } else if (command == 'Update') {
            let [plant, newRarity] = commandInfo.split(' - ');

            if (plant in plants) {
                plants[plant].rarity = Number(newRarity);
            } else {
                console.log('error');
            }
        } else if (command == 'Reset') {
            let plant = commandInfo;
            
            if (plant in plants) {
                plants[plant].rating = 0;
                plants[plant].counter = 0;
            } else {
                console.log('error');
            }
        }
        commandLine = data.shift();
    }

    console.log('Plants for the exhibition:');
    for (let plant in plants) {
        let avrRating = plants[plant].rating / plants[plant].counter || 0;
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avrRating.toFixed(2)}`);
    }
}

plantDiscovery(([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]));
console.log('----------------------------------------------------------------');
plantDiscovery(([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]));