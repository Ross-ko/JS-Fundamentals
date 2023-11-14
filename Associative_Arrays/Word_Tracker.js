function wordTracker(data) {

    let words = data.shift().split(' ');
    let repeatedWords = {};

    for (let word of words) {
        repeatedWords[word] = 0;
    }
    for (let curWord of data) {
        if (repeatedWords.hasOwnProperty(curWord)) {
            repeatedWords[curWord] += 1
        }
    }
    let occurrences = Object.entries(repeatedWords).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of occurrences) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);