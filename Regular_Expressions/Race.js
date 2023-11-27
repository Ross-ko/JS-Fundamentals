function race(data) {
    
    let participants = data.shift().split(', ');
    let command = data.shift();
    let raceStanding = {};

    participants.forEach(name => { raceStanding[name] = 0 });

    let namePattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;

    while (command != 'end of race') {
        let namesMatch = command.match(namePattern);
        let name = namesMatch.join('');
        let distancesMatch = command.match(distancePattern);
        let distance = distancesMatch.map(Number).reduce((acc, value) => acc + value, 0);
        
        if (name in raceStanding) {
            raceStanding[name] += distance;
        }

        command = data.shift();
    }
    let finalStanding = Object.entries(raceStanding).sort((a, b) => b[1] - a[1]);
    
    console.log(`1st place: ${finalStanding[0][0]}`);
    console.log(`2nd place: ${finalStanding[1][0]}`);
    console.log(`3rd place: ${finalStanding[2][0]}`);
}

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);
console.log('------------------------------------------------------------------------------------------------------------------');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);
