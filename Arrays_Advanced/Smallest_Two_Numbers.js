 function smallestTwoNumbers(arr) {
     
    arr.sort((a, b) => a - b);

    let result = [];
    index = 0;
     
    while (index < 2) {
            result.push(arr[index]);
            index++;
        }
         
        console.log(result.join(' '));
        
        console.log(arr.sort((a, b) => a - b).slice(0, 2).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('---------------------------------------------------------------------------------------');
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);