function pascalCaseSplitter(data) {

    let splitedWords = '';

    for (let char of data) {
        if (char == char.toUpperCase() && splitedWords.length == 0) {
            splitedWords += char;
        } else if (char == char.toLowerCase(char)) {
            splitedWords += char;
        } else {
            splitedWords += ', ' + char;
        }
    }

    console.log(splitedWords);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');