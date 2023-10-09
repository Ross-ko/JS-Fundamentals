function maxSequenceOfEqualElements(arr) {
    
    let longSequence = [];

    for (let i = 0; i < arr.length; i++) {

        let currNum = arr[i];
        let currSequence = [currNum];

        for (let x = i + 1; x < arr.length; x++) {

            let nextNum = arr[x];

            if (currNum == nextNum) {
                currSequence.push(nextNum);
            } else {
                break;
            }
        }
        if (currSequence.length > longSequence.length) {
        
        longSequence = currSequence;

        }
    }

    console.log(longSequence.join(' '));

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('-------------------------------------------------------------------------');
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('-------------------------------------------------------------------------');
maxSequenceOfEqualElements([4, 4, 4, 4]);
console.log('-------------------------------------------------------------------------');
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
console.log('-------------------------------------------------------------------------');