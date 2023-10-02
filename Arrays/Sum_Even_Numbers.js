function sumEvenNumbers(str) {
    
    let sum = 0;

    for (i = 0; i < str.length; i++) {
        str[i] = Number(str[i])
    }

    for (let num of str) {
        if ( num % 2 == 0) {
            sum += num;
        }
    }

    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);
console.log('-------------------------------------------------------------------------');
sumEvenNumbers(['3','5','7','9']);
console.log('-------------------------------------------------------------------------');
sumEvenNumbers(['2','4','6','8','10']);
console.log('-------------------------------------------------------------------------');