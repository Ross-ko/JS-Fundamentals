function needForSpeed(data) {

    let numberOfCars = Number(data.shift());
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [car, mileage, fuel] = data.shift().split('|');
        cars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }

    let commandLine = data.shift().split(' : ');

    while (commandLine != 'Stop') {
        let command = commandLine.shift();

        if (command == 'Drive') {
            let car = commandLine.shift();
            let distance = Number(commandLine.shift());
            let liters = Number(commandLine.shift());

            if (cars[car].fuel < liters) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].fuel -= liters;
                cars[car].mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${liters} liters of fuel consumed.`);
            }
            if (cars[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete cars[car];
            }
        } else if (command == 'Refuel') {
            let car = commandLine.shift();
            let liters = Number(commandLine.shift());
            let refuel = cars[car].fuel + liters <= 75 ? liters : 75 - cars[car].fuel;

            cars[car].fuel += refuel;
            console.log(`${car} refueled with ${refuel} liters`);
        } else if (command == 'Revert') {
            let car = commandLine.shift();
            let kilometers = Number(commandLine.shift());

            cars[car].mileage -= kilometers;
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            }
        }
        commandLine = data.shift().split(' : ');
    }
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('----------------------------------------------------------------');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);