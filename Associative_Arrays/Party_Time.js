function partyTime(data) {

    let indexOfParty = data.indexOf('PARTY');
    let guestsList = data.slice(0, indexOfParty);
    let aravingGuests = data.slice(indexOfParty + 1);

    let vip = [];
    let regular = [];

    for (let guest of guestsList) {
        if (isNaN(guest[0])) {
            regular.push(guest);       
        } else {
            vip.push(guest);
        }            
    }

    let allGuests = vip.concat(regular);

    for (let guest of aravingGuests) {
        if (allGuests.includes(guest)) {
            allGuests.splice(allGuests.indexOf(guest), 1);
        }
    }

    console.log(allGuests.length);
    
    for (let missingGuest of allGuests) {
        console.log(missingGuest);
    }
}
partyTime([
    'm8rfQBvl', 'fc1oZCE0','UgffRkOn',
    '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC',
    'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL',
    'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi',
    '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK',
    'PARTY', '2FQZT3uC', 'dziNz78I',
    'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1',
    'HTTbwRmM', 'B5yTkMQi', '8N0FThqG',
    'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn',
    '7ugX7bm0', '9CQBGUeJ'
 ]);