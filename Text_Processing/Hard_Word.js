// function hardWord(data) {
    
//     let [text, words] = data;
//     let textArr = text.split(' ');

//     for (let curWord of textArr){
//         if (curWord.startsWith('_')){
//             if (!curWord.endsWith('_')){
//                 curWord = curWord.substring(0, curWord.length - 1);
//             }
//             for (let word of words){
//                 if(curWord.length == word.length){
//                     text = text.replace(curWord, word)
//                 }
//             }
//         }        
//     }
//     console.log(text);
// }

function hardWord(data) {
    
    let [text, words] = data;
    let textArr = text.split(' ');

    let missedWords = textArr.filter(word => word.includes('_'));

    for (let word of missedWords) {
        if (!word.endsWith('_')){
            word = word.slice(0, word.length - 1);
        }

        let searchedWord = words.find(rightWord => rightWord.length == word.length);
        text = text.replace(word, searchedWord);
    }
    console.log(text);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. Ihope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);