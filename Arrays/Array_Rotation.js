function arrayRotation(arr, num) {


    for (let i = 0; i < num; i++) {

        let char = arr.shift();
        arr.push(char);

    }

    console.log(arr.join(' '));

}

arrayRotation([2, 4, 15, 31], 5);
console.log('-------------------------------------------------------------------------');
arrayRotation([32, 21, 61, 1], 4);
console.log('-------------------------------------------------------------------------');
arrayRotation([51, 47, 32, 61, 21], 2);
console.log('-------------------------------------------------------------------------');