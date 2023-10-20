function sortAnArrayBy2Criteria(arr) {
    
    let sortedArr = arr.sort((cur, next) => cur.length - next.length || cur.localeCompare(next));

    console.log(sortedArr.join('\n'));

}

sortAnArrayBy2Criteria(['alpha','beta','gamma']);
console.log('---------------------------------------------------------------------------------------');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);