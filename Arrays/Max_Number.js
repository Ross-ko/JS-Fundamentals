function maxNumber(arr) {
    
    let topInteger = [];

    for (let i = 0; i < arr.length; i++) {

        let maxNum = true;

        for (let y = i + 1; y < arr.length; y++) {

            if (arr[y] >= arr[i]) {

                maxNum = false;
                break;
                
            }
        }
        if (maxNum) {
            
            topInteger.push(arr[i]);

        }
    }

    console.log(topInteger.join(' '));

}

maxNumber([1, 4, 3, 2]);
console.log('-------------------------------------------------------------------------');
maxNumber([19, 259, 13, 763, 854]);
console.log('-------------------------------------------------------------------------');
maxNumber([5, 13, 2, 1, 67, 39]);
console.log('-------------------------------------------------------------------------');