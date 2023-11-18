function modernTimesOfHashTag(text) {

    let textArr = text.split(' ');

    for (let word of textArr) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.slice(1);
            let chek = true;
            for (let char of word) {
                if (!isNaN(Number(char))) {
                    chek = false;
                    break;
                }
            }
            if (chek == true) {
                console.log(word);
            }
        }
    }
}

modernTimesOfHashTag('The symbol # is known #variously inEnglish-speaking #regions as the #number sign');