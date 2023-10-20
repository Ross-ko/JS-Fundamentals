function distinctArray(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length ; i++) {

        if (!newArr.includes(arr[i])) {

            newArr.push(arr[i]);
            
        }
    }
    
    console.log(newArr.join(' '));

    let experiment = arr.filter((element, index) => arr.indexOf(element) === index);

    console.log(experiment.join(' '));
}

distinctArray([1, 2, 3, 4]);
console.log('---------------------------------------------------------------------------------------');
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log('---------------------------------------------------------------------------------------');
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
