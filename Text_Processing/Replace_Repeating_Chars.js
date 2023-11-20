function replaceRepeatingChars(data) {
    
    let nonRepeatingStr = '';
    let previusChar = '';

    for (let char of data) {
        if (previusChar != char) {
            nonRepeatingStr += char;
            previusChar = char;
        }

    }
    console.log(nonRepeatingStr);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');