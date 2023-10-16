function processOddNumbers(arr) {

    let result = [];

    for (i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {

            result.push(arr[i])

        }
    }

    console.log(result.map(x => x * 2).reverse());

    arr => arr.filter((_, i) => i % 2 != 0).map(x => x * 2).reverse().join(' ') /* ninja */

}

processOddNumbers([10, 15, 20, 25]);
console.log('---------------------------------------------------------------------------------------');
processOddNumbers([3, 0, 10, 4, 7, 3]);

