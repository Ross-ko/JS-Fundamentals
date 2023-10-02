function evenAndOddSubtractio(nums) {
    
    let evenSum = 0;
    let oddSum = 0;

    for (let num of nums) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}

evenAndOddSubtractio([1,2,3,4,5,6]);
console.log('-------------------------------------------------------------------------');
evenAndOddSubtractio([3,5,7,9]);
console.log('-------------------------------------------------------------------------');
evenAndOddSubtractio([2,4,6,8,10]);
console.log('-------------------------------------------------------------------------');