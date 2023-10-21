function searchForANumber(arr, data) {
    
    let workArr = arr.slice(0, data[0]).splice(data[1]);
    let counter = 0;

    for (let i = 0; i < workArr.length; i++) {
        
        if (workArr[i] == data[2]) {
            counter++;
        }

    }

    console.log(`Number ${data[2]} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('---------------------------------------------------------------------------------------');
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);