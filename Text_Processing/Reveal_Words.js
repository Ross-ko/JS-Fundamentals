function revealWords(words, text) {
    
    let wordsArr = words.split(', ');
    let word = wordsArr.shift();
    let textArr = text.split(' ');

    while (word != undefined) {
        for (let curWord of textArr) {
            if (curWord.startsWith('*') && curWord.length == word.length) {
                let index = textArr.indexOf(curWord);
                textArr.splice(index, 1, word);
            }
        }  
        word = wordsArr.shift();
    }          
    console.log(textArr.join(' '));
}

// function revealWords(wordsStr, textStr) {
    
//     let words = wordsStr.split(', ');

//     for (let word of words) {

//         let wordLength = word.length;
//         let template = '*'.repeat(wordLength);

//         textStr = textStr.replace(template, word);
//     }
//     console.log(textStr);
// }

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');