function starEnigma(data) {

    let msgsCount = data.shift();
    let starPattern = /[star]/gi;
    let decryptedMsgs = [];

    for (let i = 0; i < msgsCount; i++) {
        let msg = data[i]
        let decryptedMsg = '';

        let matches = msg.match(starPattern);
        
        if (matches) {
            let count = matches.length

            for (let char of msg) {
                let code = char.charCodeAt();
                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        } else {
            decryptedMsg = msg;
        }
        decryptedMsgs.push(decryptedMsg);
    }

    let planetPattern = /@(?<planet>[A-Z][a-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<type>[AD])![^@\-!:>]*->(?<soldiers>\d+)/;

    let attackedPlanet = [];
    let destroyedPlanet = [];

    for (let msg of decryptedMsgs) {
        let match = msg.match(planetPattern);

        if(match) {
            let {planet, type} = match.groups;

            if (type == 'A') {
                attackedPlanet.push(planet);
            } else {
                destroyedPlanet.push(planet);
            }
        }
    }
    
    attackedPlanet.sort((a, b)=> a.localeCompare(b));
    destroyedPlanet.sort((a, b)=> a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanet.length}`);
    attackedPlanet.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanet.length}`);
    destroyedPlanet.forEach(planet => console.log(`-> ${planet}`));
}

starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
console.log('--------------------------------------------------------------');
starEnigma([
    '3', 
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);