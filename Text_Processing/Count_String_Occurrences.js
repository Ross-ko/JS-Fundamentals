function countStringOccurrences(sentence, searchedWord) {
    
    let counter = 0;
    let sentenceArr = sentence.split(' ');

    for (let word of sentenceArr) {
        if (word == searchedWord) {
            counter++;
        }
    }
    console.log(counter);
}

countStringOccurrences('softuni is great place for learning new programming languages', 'softuni');