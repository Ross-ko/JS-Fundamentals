function problemThree(data) {

    let myZoo = {};
    let commandLine = data.shift();

    while (!commandLine.startsWith('EndDay')) {
        let [command, commandInfo] = commandLine.split(': ');

        if (command == 'Add') {
            let [animalName, foodQty, area] = commandInfo.split('-');

            if (animalName in myZoo) {
                myZoo[animalName].foodQty += Number(foodQty);
            } else {
                myZoo[animalName] = { foodQty: Number(foodQty), area };
            }
        } else if (command == 'Feed') {
            let [animal, food] = commandInfo.split('-');
            if (animal in myZoo) {
                myZoo[animal].foodQty -= Number(food);
                if (myZoo[animal].foodQty <= 0) {
                    console.log(`${animal} was successfully fed`);
                    delete myZoo[animal];
                }
            }
        }

        commandLine = data.shift();
    }
    console.log('Animals:');
    for (let animal in myZoo) {
        console.log(` ${animal} -> ${myZoo[animal].foodQty}g`);
    }

    let zoo = Object.values(myZoo);
    let animalsInArea = {};
    zoo.forEach((area) => {animalsInArea[area.area] = (animalsInArea[area.area] || 0) + 1;});

    console.log('Areas with hungry animals:');
    for (let area in animalsInArea) {
        console.log(` ${area}: ${animalsInArea[area]}`);
    }
}

problemThree([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]);
console.log('----------------------------------------------------------------');
problemThree([
    "Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]);
console.log('----------------------------------------------------------------');
problemThree([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
])