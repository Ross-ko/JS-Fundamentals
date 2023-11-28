function secretChat(data) {

    let concealedMsg = data.shift();
    let command = data.shift();

    while (command != 'Reveal') {
        let opInfo = command.split(':|:');
        let curCommand = opInfo.shift();

        switch (curCommand) {
            case 'ChangeAll':
                let substring = opInfo.shift();
                let replacement = opInfo.shift();

                concealedMsg = concealedMsg.split(substring).join(replacement);

                console.log(concealedMsg);
                break;
            case 'Reverse':
                let firstMatch = true;

                if (firstMatch) {
                    let strToRev = opInfo.shift();

                    if (concealedMsg.includes(strToRev)) {
                        concealedMsg = concealedMsg.split(strToRev).join(strToRev.split('').reverse().join(''));

                        console.log(concealedMsg);

                        firstMatch = false;
                    } else {
                        console.log('error');
                    }
                }
                break;
            case 'InsertSpace':

                let indx = opInfo.shift();

                concealedMsg = concealedMsg.slice(0, indx) + ' ' + concealedMsg.slice(indx);

                console.log(concealedMsg);
                break;
        }

        command = data.shift();
    }
    console.log(`You have a new text message: ${concealedMsg}`);
}


secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
    ])
    console.log('----------------------------------------------------------------');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
    ])