function arrayManipulator(arr, data) {
    
    for (let i = 0; i < data.length; i++) {

        let commandsAndValues = data[i].split(' ');
        let command = commandsAndValues[0];

        if (command == 'add') {

            let index = Number(commandsAndValues[1]);
            let num = Number(commandsAndValues[2]);
            arr.splice(index, 0, num);

        } else if (command == 'addMany') {

            let index = Number(commandsAndValues[1]);

            for (let i = 2; i < commandsAndValues.length; i++) {

                let num = Number(commandsAndValues[i]);
                arr.splice(index, 0, num); 
                index++;

            }  
        } else if (command == 'contains') {

            let num = Number(commandsAndValues[1]);
            console.log(arr.indexOf(num));

        } else if (command == 'remove') {

            let index = Number(commandsAndValues[1]);
            arr.splice(index, 1)

        } else if (command == 'shift') {

            let movement = Number(commandsAndValues[1]);

            for (let i = 1; i <= movement; i++) {

                let num = arr.shift();
                arr.push(num);

             }
        } else if (command == 'sumPairs') {

            let workArr = [];

            for (let i = 0; i < arr.length; i += 2) {

                if (i + 1 < arr.length) {

                workArr.push(arr[i] + arr[i+1]);

                } else {

                    workArr.push(arr[i]);

                }
            }

            arr = workArr;

        } else {

            console.log(`[ ${arr.join(', ')} ]`);

        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 
    'contains 1', 
    'contains 3', 
    'print']);
console.log('---------------------------------------------------------------------------------------');
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5',
    'contains 15',
    'remove 3',
    'shift 1',
    'print']);