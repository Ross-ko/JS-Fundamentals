function gladiatorInventory(data) {

    let inventory = data[0].split(' ');

    for (let i = 1; i < data.length; i++) {

        let commandsAndEquipment = data[i].split(' ');
        let command = commandsAndEquipment[0];
        let equipment = commandsAndEquipment[1];

        if (command == 'Buy') {
            if (inventory.includes(equipment)) {
                continue;
            } else {
                inventory.push(equipment);
            }
        } else if (command == 'Trash') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (command == 'Repair') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                let repairedItem = inventory.splice(index, 1);
                inventory.push(repairedItem[0]);
            }
        } else if (command == 'Upgrade') {
            let upgradeInfo = equipment.split('-');
            let itemToUpgrade = upgradeInfo[0];
            let upgrade = upgradeInfo[1];

            if (inventory.includes(itemToUpgrade)) {
                let index = inventory.indexOf(itemToUpgrade);
                upgradetItem = `${itemToUpgrade}:${upgrade}`
                inventory.splice(index+1, 0, upgradetItem);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
console.log('-------------------------------------------------------------------------');
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);