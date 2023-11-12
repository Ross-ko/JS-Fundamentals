function sortAddressbook(data) {
    
    let addressbook = {};

    for (let info of data) {

        let [name, address] = info.split(':');
        addressbook[name] = address;

    }

    let sortedAddbook = Object.entries(addressbook).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sortedAddbook) {

        console.log(`${name} -> ${address}`);

    }
}

sortAddressbook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);