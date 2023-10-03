function addAndSubtract(arr) {
    
    let modifiedArr = [];
    let modifiedSum = 0;
    let sum = 0;

    for (i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (arr[i] % 2 == 0) {
            modifiedArr.push(arr[i] + i)
            modifiedSum += arr[i] + i;
        } else {
            modifiedArr.push(arr[i] - i)
            modifiedSum += arr[i] - i;
        }
    }

    console.log(modifiedArr);
    console.log(sum);
    console.log(modifiedSum);

}

addAndSubtract([5, 15, 23, 56, 35]);
console.log('-------------------------------------------------------------------------');
addAndSubtract([-5, 11, 3, 0, 2]);
console.log('-------------------------------------------------------------------------');