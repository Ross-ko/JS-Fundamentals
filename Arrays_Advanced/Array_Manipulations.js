function arrayManipulations(arr) {
    
    let arrToManipulate = arr[0].split(' ').map(Number);

    for (let i = 1; i < arr.length; i++) {

        let commandAndValue = arr[i].split(' ');
        let command = commandAndValue[0];

        if (command == 'Add') {

            let num = Number(commandAndValue[1]);
            arrToManipulate.push(num);

        } else if (command == 'Remove') {

            let num = Number(commandAndValue[1]);

            arrToManipulate = arrToManipulate.filter(el => el !== num);

            } else if (command == 'RemoveAt') {

                let index = Number(commandAndValue[1]);
                arrToManipulate.splice(index, 1);

            } else if (command == 'Insert') {

                let num = Number(commandAndValue[1]);
                let index = Number(commandAndValue[2]);
                arrToManipulate.splice(index, 0, num)
            }
        }

    console.log(arrToManipulate.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 
    'Add 3', 
    'Remove 2', 
    'RemoveAt 1', 
    'Insert 8 3']);
console.log('---------------------------------------------------------------------------------------');
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']);