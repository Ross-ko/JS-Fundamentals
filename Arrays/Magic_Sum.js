function magicSum(arr, magicNum) {
    
    let perfectPair = [];

    for (let i = 0; i < arr.length; i++) {

        let currNum = arr[i];

        for (let x = i + 1; x < arr.length; x++) {

            let forwardNum = arr[x];
            
            if (currNum + forwardNum == magicNum) {

                perfectPair.push([`${currNum} ${forwardNum}`]);
                console.log(perfectPair.join(' '));
                perfectPair = [];
                
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('-------------------------------------------------------------------------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('-------------------------------------------------------------------------');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('-------------------------------------------------------------------------');