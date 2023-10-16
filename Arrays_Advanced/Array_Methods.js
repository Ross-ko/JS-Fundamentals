function pushAndPop() {
    
    let arr = [10, 20, 30, 40, 50];
    console.log(arr);

    arr.push(60, 70);
    console.log(arr);

    let num = arr.pop();           /* take out last element from the array and this element can be used as variable */
    console.log(arr);
    console.log(num);
}
console.log('Push and Pop methods');
pushAndPop();
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function shiftAndUnshift() {
    
    let arr = [10, 20, 30, 40, 50];
    console.log(arr);

    arr.unshift(0, 2, 4, 6, 8);
    console.log(arr);

    let num = arr.shift();          /* take out first element from the array and this element can be used as variable */
    console.log(arr);
    console.log(num);

}
console.log('Shift and Unshift methods');
shiftAndUnshift();
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function includes(arr, element) {

    for (let curEl of arr) {

        if (curEl === element) {
            return true;
        }
    }

    return false;
}
console.log('includes method')
console.log(includes([1, 2, 3], 2));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function indexOf(arr, element) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === element) {
            return i;
        }

    }

    return -1; // by default returns -1
}
console.log('indexOf method');
console.log(indexOf([1, 2, 3], 2));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function slice(arr, start, end) {
    
    let result = [];

    if (start < 0) {

        start += arr.length;

    }
    if (end < 0) {

        end += arr.length;

    }
    for (let i = start; i < end; i++) {

        result[result.length] /*its same as push() method*/ = arr[i];

    }

    return result;
}
console.log('slice method');
console.log(slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5)); /*from index 2 to 5 (not included)*/
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function splice() {                             
    
    let arr = [10, 20, 30, 40, 50];
    // console.log(arr.splice(2, 2));           /* from index 2 count 2 elements (to the right, if set (2, -2) will begin from right to left) and delete them */

    console.log(arr.splice(3, 0, 45));          /* from index 3 delete 0 elements and set NEW VALUE to index 3: 45 (40 will go to the right)) */
    console.log(arr);

}
console.log('splice method');
splice();
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function join(arr, string) {
    
    let result = '';

    for (let i = 0; i < arr.length - 1; i++) {

        result += String(arr[i]);
        result += string;
        
    }
    if (arr.length > 0) {

            result += arr[arr.length - 1];

    }

    return result;
}
console.log('join method');
console.log(join([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], '-'));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function map(arr, operation) {
                                                                                    
    let result = [];

    for (let element of arr) {

        let newElement = operation(element);
        result.push(newElement); /* same as 'result[result.length] = newElement;' */ 

    }

    return result;
}
console.log('map method');
console.log(map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x * 2 /* or turn it to string - 'String' */));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function filter(arr, predicate) {
    
    let result = [];

    for (let element of arr) {

        if (predicate(element)) {

            result.push(element);

        }
    }

    return result;
}
console.log('filter method');
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], x => x % 2 === 0));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function swap(arr, x, y) {

    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;

}
function swapElements(arr) {

    for (let i = 0; i < arr.length/2; i++) {

    swap(arr, i, arr.length - 1 - i); /* nested function */

    }

    return arr.join(' ');
}
console.log('swap');
console.log(swapElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');

function compare(a, b) {
    
    return a > b;

}

function bubbleSort(arr) {
    
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (compare(arr[j], arr[j + 1])) {                                  /* more nested functions... XD*/
                
                swap(arr, j, j + 1);

            }
        }
    }

    return arr;
}
console.log('bubbleSort');
console.log(bubbleSort([3, 8, 4, 0, 69, 9, 7, 5, 1, 10, 2, 6]));
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------------------');
