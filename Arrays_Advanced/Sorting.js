function sorting(arr) {

    let sortedArr = arr.sort((a, b) => a - b);

    let result = []

    for (let i = (arr.length - 1) / 2; i >= 0 ; i--) {

        let maxNum = arr.pop();
        let minNum = arr.shift();

        result.push(maxNum);
        result.push(minNum);
    }

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('---------------------------------------------------------------------------------------');
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);