function reverseAnArrayOfNumbers(num, arr) {

    let reversed = [];

    for (let i = num -1; i >= 0; i--) {

        reversed.push(arr[i]);

    }

    console.log(reversed.join(' '));
/*
    console.log(arr.slice(0, num).reverse().join(' ')); - one line salution
*/
}
reverseAnArrayOfNumbers(3, [10,20,30,40]);
console.log('-------------------------------------------------------------------------');
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);