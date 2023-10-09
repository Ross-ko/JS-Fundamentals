function equalSums(arr) {

    let magicIndex;

    for (let i = 0; i < arr.length; i++) {

        let rightSum = 0;
        let leftSum = 0;

        for (let x = 0; x < i; x++ ) {
            leftSum += arr[x];
        }
        for (let y = i + 1; y < arr.length; y++ ) {
            rightSum += arr[y];
        }
        if (leftSum == rightSum) {
            magicIndex = i;
            break;
        } else {
            magicIndex = 'no';
        }
    }

    console.log(magicIndex);

}

equalSums([1, 2, 3, 3]);
console.log('-------------------------------------------------------------------------');
equalSums([1, 2, 3]);
console.log('-------------------------------------------------------------------------');
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
console.log('-------------------------------------------------------------------------');