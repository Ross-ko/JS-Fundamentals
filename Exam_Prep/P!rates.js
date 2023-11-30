function pirates(data) {
    
    let command = data.shift()
    let citiesToRaid = {};
    let counter = 0

    while (command != 'Sail') {
        let [city, population, gold] = command.split('||');
        population = Number(population);
        gold = Number(gold);

        if (city in citiesToRaid) {
            citiesToRaid[city].population += population;
            citiesToRaid[city].gold += gold;
        } else {
            citiesToRaid[city] = {population, gold};
            counter++;
        }

        command = data.shift()
    }

    let commandLine = data.shift().split('=>');
    let newCommand = commandLine.shift();

    while (newCommand != 'End') {  
        switch (newCommand) {
            case 'Plunder':
                let [city, population, gold] = commandLine;

                console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                citiesToRaid[city].population -= Number(population);
                citiesToRaid[city].gold -= Number(gold);
                if (citiesToRaid[city].population <= 0 || citiesToRaid[city].gold <= 0) {
                    console.log(`${city} has been wiped off the map!`);
                    delete citiesToRaid[city];
                    counter -= 1;
                }
                break;
            case 'Prosper':
                let [town, money] = commandLine;
                if (Number(money) <= 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    citiesToRaid[town].gold += Number(money);
                    console.log(`${money} gold added to the city treasury. ${town} now has ${citiesToRaid[town].gold} gold.`);
                }
                break;
        }
        commandLine = data.shift().split('=>');
        newCommand = commandLine.shift();
    }

    
    if (counter == 0) {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        for (let city in citiesToRaid) {
            console.log(`${city} -> Population: ${citiesToRaid[city].population} citizens, Gold: ${citiesToRaid[city].gold} kg`);
        }
    }
}

pirates((
    ["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]
));
console.log('----------------------------------------------------------------');
pirates((
    ["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]
));