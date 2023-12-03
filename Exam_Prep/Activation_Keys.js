function activationKeys(data) {

    let rawActivationKey = data.shift();
    let commandLine = data.shift();

    while (commandLine != 'Generate') {
        if (commandLine.includes('Slice')){
            let command = commandLine.split('>>>');
            let startIndx = Number(command[1]);
            let endIndx = Number(command[2]);

            rawActivationKey = rawActivationKey.slice(0, startIndx) + rawActivationKey.slice(endIndx);
            console.log(rawActivationKey);
        } else if (commandLine.includes('Flip')) {
            let command = commandLine.split('>>>');
            let upOrLow = command[1];
            let startIndx = Number(command[2]);
            let endIndx = Number(command[3]);

            if (upOrLow == 'Upper') {
                let flip = rawActivationKey.slice(startIndx, endIndx).toUpperCase();

                rawActivationKey = rawActivationKey.slice(0, startIndx) + flip + rawActivationKey.slice(endIndx);
                console.log(rawActivationKey);
            } else if (upOrLow == 'Lower') {
                let flip = rawActivationKey.slice(startIndx, endIndx).toLowerCase();

                rawActivationKey = rawActivationKey.slice(0, startIndx) + flip + rawActivationKey.slice(endIndx);
                console.log(rawActivationKey);
            }
        } else if (commandLine.includes('Contains')) {
            let command = commandLine.split('>>>');
            let substring = command[1];

            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        }
        commandLine = data.shift();
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}

activationKeys(([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]));
console.log('-----------------------------------------------------');
activationKeys(([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]));