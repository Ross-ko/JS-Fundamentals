function battleManager(data) {

    let herosParty = {};
    let commandLine = data.shift();

    while (commandLine != "Results") {
        let commandInfo = commandLine.split(':');
        let command = commandInfo.shift();

        if (command == "Add") {
            let [hero, helth, energy] = commandInfo;

            if (hero in herosParty) {
                herosParty[hero].helth += Number(helth);
            } else {
                herosParty[hero] = { helth: Number(helth), energy: Number(energy) }
            }
        } else if (command == "Attack") {
            let [attName, defName, dmg] = commandInfo;

            if (attName in herosParty && defName in herosParty) {
                herosParty[defName].helth -= Number(dmg);
                herosParty[attName].energy -= 1;

                if (herosParty[defName].helth <= 0) {

                    console.log(`${defName} was disqualified!`);
                    delete herosParty[defName];
                }
                if (herosParty[attName].energy <= 0) {

                    console.log(`${attName} was disqualified!`);
                    delete herosParty[attName];
                }
            }
        } else if (command == "Delete") {
            let hero = commandInfo;
            
            if (hero == 'All') {
                for (let hero in herosParty) {
                    delete herosParty[hero];
                }
            } else {
                delete herosParty[hero];
            }
        }
            commandLine = data.shift();
    }

    console.log(`People count: ${Object.keys(herosParty).length}`);
    for (let hero in herosParty) {
        console.log(`${hero} - ${herosParty[hero].helth} - ${herosParty[hero].energy}`);
    }
}

battleManager([
    "Add:Mark:1000:5",
    "Add:Clark:1000:2",
    "Attack:Clark:Mark:500",
    "Attack:Clark:Mark:800",
    "Add:Charlie:4000:10",
    "Results"
])
console.log('----------------------------------------------------------------');
battleManager([
    "Add:Bonnie:3000:5",
    "Add:Kent:10000:10",
    "Add:Johny:4000:10",
    "Attack:Johny:Bonnie:400",
    "Add:Johny:3000:5",
    "Add:Peter:7000:1",
    "Delete:Kent",
    "Results"
])
console.log('----------------------------------------------------------------');
battleManager([
    "Add:Bonnie:3000:5",
    "Add:Johny:4000:10",
    "Delete:All",
    "Add:Bonnie:3333:3",
    "Add:Aleks:1000:70",
    "Add:Tom:4000:1",
    "Results"
])