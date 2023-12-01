function worldTour(data) {

    let citiesToVisit = data.shift();
    let command = data.shift();

    while (command !== 'Travel') {
        let commandInfo = command.split(':');
        let curCommand = commandInfo.shift();

        if (curCommand == 'Add Stop') {
            let indx = Number(commandInfo[0]);
            let str = commandInfo[1];
            
            if (indx >= 0 && indx < citiesToVisit.length) {
                citiesToVisit = citiesToVisit.slice(0, indx) + str + citiesToVisit.slice(indx);
                console.log(citiesToVisit);
            } else {
                console.log(citiesToVisit);
            }
        } else if (curCommand == 'Remove Stop') {
            let starIndx = Number(commandInfo[0]);
            let endIndx = Number(commandInfo[1]);
            
            if (starIndx >= 0 && starIndx < citiesToVisit.length && endIndx >= 0 && endIndx < citiesToVisit.length) {
                citiesToVisit = citiesToVisit.slice(0, starIndx) + citiesToVisit.slice(endIndx + 1);
                console.log(citiesToVisit);
            } else {
                console.log(citiesToVisit);
            }
        } else if (curCommand == 'Switch') {
            let oldStr = commandInfo[0];
            let newStr = commandInfo[1];

            if (citiesToVisit.indexOf(oldStr) != -1) {
                citiesToVisit = citiesToVisit.replace(oldStr, newStr);
                console.log(citiesToVisit);
            } else {
                console.log(citiesToVisit);
            }
        }
        command = data.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${citiesToVisit}`);
}

worldTour(([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]));
console.log('----------------------------------------------------------------');
worldTour(([
    "Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"
]));