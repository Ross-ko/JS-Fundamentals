function lastKNumbersSequence(n, k) {
    
    let arr = [1];

    for (let i = 1; i < n; i++) {

        let sum = 0;
        let index = i - k < 0 ? 0 : i - k;

        for (let y = index; y < i; y++) {

            sum += arr[y];

        }

        arr.push(sum);

    }

    console.log(arr.join(' '));
}

lastKNumbersSequence(6, 3);
console.log('---------------------------------------------------------------------------------------');
lastKNumbersSequence(8, 2);