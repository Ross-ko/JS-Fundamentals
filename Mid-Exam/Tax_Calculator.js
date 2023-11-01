function taxCalculator(data) {

    let collectedTaxes = 0;
    for (let i = 0; i < data.length; i++) {

        let vehiclesInfo = data[i].split('>>');

        for (let x = 0; x < vehiclesInfo.length; x++) {

            let tax = 0;
            let vehicleData = vehiclesInfo[x].split(' ');
            let vehicleType = vehicleData[0];
            let taxedYears = vehicleData[1];
            let kilometers = vehicleData[2];

            if (vehicleType == 'family') {
                tax = 50 - (5 * taxedYears);
                if (kilometers >= 3000) {
                    tax += Math.floor(kilometers / 3000) * 12;
                }
                collectedTaxes += tax;
                console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            } else if (vehicleType == 'heavyDuty') {
                tax = 80 - (8 * taxedYears);
                if (kilometers >= 9000) {
                    tax += Math.floor(kilometers / 9000) * 14;
                }
                collectedTaxes += tax;
                console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            } else if (vehicleType == 'sports') {
                tax = 100 - (9 * taxedYears);
                if (kilometers >= 2000) {
                    tax += Math.floor(kilometers / 2000) * 18;
                }
                collectedTaxes += tax;
                console.log(`A ${vehicleType} car will pay ${tax.toFixed(2)} euros in taxes.`);
            } else {
                console.log('Invalid car type.');
                continue;
            }
        }
    }
    console.log(`The National Revenue Agency will collect ${collectedTaxes.toFixed(2)} euros in taxes.`);
}

taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]);
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ]);