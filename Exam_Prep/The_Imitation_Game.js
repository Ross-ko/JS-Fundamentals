function theImitationGame(data) {

    let encryptedMsg = data.shift();
    let commandLine = data.shift();

    while (commandLine != 'Decode'){
        let commandInfo = commandLine.split('|');
        let command = commandInfo.shift();

        switch (command) {

            case 'Move':
                let sliceIndx = Number(commandInfo[0]);

                encryptedMsg = encryptedMsg.slice(sliceIndx) + encryptedMsg.slice(0, sliceIndx);
                break;
            case 'Insert':
                let insertIndx = Number(commandInfo[0]);
                let charToInsert = commandInfo[1];

                encryptedMsg = encryptedMsg.slice(0, insertIndx) + charToInsert + encryptedMsg.slice(insertIndx);
                break;
            case 'ChangeAll':
                let charToChange = commandInfo[0];
                let newChar = commandInfo[1];

                encryptedMsg = encryptedMsg.split(charToChange).join(newChar);
                break;
        }
        commandLine = data.shift();
    }
    console.log(`The decrypted message is: ${encryptedMsg}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ])
  console.log('------------------------------------------------------------------------------------------------');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ])