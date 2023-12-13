function emailValidator(data) {

    let emailAdress = data.shift();
    let commandLine = data.shift();

    while (commandLine != 'Complete') {
        if (commandLine.includes("Make Upper")) {
            emailAdress = emailAdress.toUpperCase();

            console.log(emailAdress);
        } else if (commandLine.includes("Make Lower")) {
            emailAdress = emailAdress.toLowerCase();

            console.log(emailAdress);
        } else if (commandLine.includes("GetDomain")) {
            let command = commandLine.split(' ');
            let count = command[1];

            console.log(emailAdress.slice(emailAdress.length - count));
        } else if (commandLine.includes("GetUsername")) {
            let indx = emailAdress.indexOf('@');

            if (indx != -1) {
                console.log(emailAdress.slice(0, indx));
            } else {
                console.log(`The email ${emailAdress} doesn't contain the @ symbol.`);
            }
        } else if (commandLine.includes("Replace")) {
            let command = commandLine.split(' ');
            let char = command[1];

            if (emailAdress.includes(char)) {

                console.log(emailAdress.split(char).join('-'));
            } else {
                console.log(emailAdress);
            }
        } else if (commandLine.includes("Encrypt")) {
            let emailToAscii = ''

            for (let char of emailAdress) {
                emailToAscii += char.charCodeAt() + ' ';
            }
            console.log(emailToAscii);
        }

        commandLine = data.shift();
    }

}

emailValidator([
    "Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"
]);
console.log('----------------------------------------------------------------');
emailValidator([
    "AnotherMail.com",
    "Make Lower",
    "GetUsername",
    "Replace a",
    "Complete"
]);
console.log('----------------------------------------------------------------');
emailValidator([
    "Another@Mail.com",
    "Make Lower",
    "GetUsername",
    "GetDomain 3",
    "Encrypt",
    "Complete"
]);
