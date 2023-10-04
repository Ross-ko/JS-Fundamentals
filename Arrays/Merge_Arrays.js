function mergeArrays(arr1, arr2) {
    
    let hybridArr = [];

    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 == 0) {

            hybridArr.push(Number(arr1[i]) + Number(arr2[i]));

        } else {

            hybridArr.push(arr1[i] + arr2[i]);

        }

    }
    
    console.log(hybridArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
console.log('-------------------------------------------------------------------------');
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
console.log('-------------------------------------------------------------------------');