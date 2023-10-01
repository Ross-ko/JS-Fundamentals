function printAnArrayWithForOfLoop() {
    
    let arr = [1, 2, 3, 4, 5];
    let nums = [];

    for (let num of arr) {
        nums += `${num} `;
    }

    console.log(nums);

}

printAnArrayWithForOfLoop();