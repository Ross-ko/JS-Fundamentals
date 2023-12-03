function problemOne(data) {
    let myStr = data.shift();
    let commandLine = data.shift();

    while (commandLine != 'End') {
        if (commandLine.includes('Translate')) {
            let command = commandLine.split(' ');
            let char = command[1];
            let replacment = command[2];

            if (myStr.includes(char)) {
                myStr = myStr.split(char).join(replacment);
                console.log(myStr);
            }
        } else if (commandLine.includes('Includes')) {
            let command = commandLine.split(' ');
            let subStr = command[1];

            if (myStr.includes(subStr)) {
                console.log(`True`);
            } else {
                console.log('False');
            }
        } else if (commandLine.includes('Start')) {
            let command = commandLine.split(' ');
            let subStr = command[1];

            if (myStr.startsWith(subStr)) {
                console.log(`True`);
            } else {
                console.log('False');
            }
        } else if (commandLine.includes('Lowercase')) {
            myStr = myStr.toLowerCase();
            console.log(myStr);
        } else if (commandLine.includes('FindIndex')) {
            let command = commandLine.split(' ');
            let char = command[1];

            if (myStr.indexOf(char) != -1) {
                console.log(myStr.lastIndexOf(char));
            }
        } else if (commandLine.includes('Remove')) {
            let command = commandLine.split(' ');
            let startIndx = Number(command[1]);
            let count = Number(command[2]);

            myStr = myStr.slice(0, startIndx) + myStr.slice(startIndx + count);
            console.log(myStr);
        }
        commandLine = data.shift();
    }
}

problemOne([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
]);
console.log('----------------------------------------------------------------');
problemOne([
    "*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"
]);
