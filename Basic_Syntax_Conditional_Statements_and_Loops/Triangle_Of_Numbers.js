function triangleOfNumbers (num) {
   
    // for (let n = 1; n <= num; n++) {
    //     console.log(`${n} `.repeat(n));
    // }
   
    for (let row = 1; row <= num; row++) {
        let curRow = '';
        for (let column = 1; column <= row; column++) {
            curRow += row + ' ';
        }
        console.log(curRow);
    }
}

// triangleOfNumbers(3);
// triangleOfNumbers(5);
triangleOfNumbers(6);