function phoneBook(data) {

    let phonebook = {};

    for (let contact of data) {

        let [name, telNumber] = contact.split(' ');
        phonebook[name] = telNumber;

    }
    for (let [name, telNumber] of Object.entries(phonebook)) {

        console.log(`${name} -> ${telNumber}`);
        
    }

}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);