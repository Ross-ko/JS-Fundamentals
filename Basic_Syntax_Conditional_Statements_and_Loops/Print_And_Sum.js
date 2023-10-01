function printAndSum (start, end) {
    
    let numbers = '';
    let sum = 0;

    for (let n = start; n <= end; n++) {
        numbers += n + ' ';
        sum += n;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

// printAndSum (5, 10);
printAndSum (0, 26);
// printAndSum (50, 60);