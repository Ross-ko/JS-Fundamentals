function bombNumbers(arr, bombAndPower) {
    
    let bomb = bombAndPower[0];
    let power = bombAndPower[1];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == bomb) {

            arr.splice(i - power, power * 2 + 1);

        }
    }

    for (let el of arr) {

        sum += el
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log('---------------------------------------------------------------------------------------');
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log('---------------------------------------------------------------------------------------');
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
console.log('---------------------------------------------------------------------------------------');
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
