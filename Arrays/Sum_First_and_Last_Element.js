function sumFirstAndLastElement(array) {
    
    console.log(array[0] + array[array.length - 1]);
    // console.log(array[0] + array.length - 1); sums index '0' with ALL of the elements in the array = 33 (in this case)
}

sumFirstAndLastElement([30, 40, 50, 60]);