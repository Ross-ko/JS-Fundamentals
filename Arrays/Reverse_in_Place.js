function reverseInPlace(arr) {
/*   
    console.log(arr.reverse().join(' '));
*/
    for (let i = 0; i < arr.length / 2; i++) {

        let curEl = arr[i];

        let newIndex = arr.length - 1 - i;

        arr[i] = arr[newIndex];

        arr[newIndex] = curEl;

    }

    console.log(arr.join(' '));
    
}


reverseInPlace(['a','b','c','d','e']);