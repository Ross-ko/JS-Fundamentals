function negativeOrPositiveNumbers(arr) {
    
    let sortedArr = [];

    for (let element of arr) {

        let curEl = Number(element);

        if (curEl < 0) {

            sortedArr.unshift(curEl);

        } else {

            sortedArr.push(curEl);

        }
    }

    console.log(sortedArr.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log('---------------------------------------------------------------------------------------');
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);