function piccolo(data) {

    let parking = {}

    for (let car of data) {
        let [direction, carNumber] = car.split(', ');
        if (direction == 'IN') {
            parking[carNumber] = carNumber;
        } else {
            delete parking[carNumber]
        }
    }

    let sortedParking = Object.entries(parking).sort();

    if (sortedParking.length == 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let [key, value] of sortedParking) {
            console.log(value);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);