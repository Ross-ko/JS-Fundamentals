function oddOccurrences(data) {

    let words = {};
    let dataArr = data.toLowerCase().split(' ');
    let answer = [];

    for (let curWord of dataArr) {
        if (curWord in words) {
            words[curWord]++
        } else {
            words[curWord] = 1;
        }
    }
    for (let [key, value] of Object.entries(words)){
        if (value % 2 != 0) {
            answer.push(key);
        }
    }
    console.log(answer.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');