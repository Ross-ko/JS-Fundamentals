function mirrorWords(data) {

    let mirorPairs = [];
    let counter = 0;
    let pattern = /(?<sep>[#@])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/gi;

    let match = pattern.exec(data);

    while (match) {

        let firstWord = match.groups.wordOne;
        let secondWord = match.groups.wordTwo;

        if (firstWord == secondWord.split('').reverse().join('')) {
            mirorPairs.push(`${firstWord} <=> ${secondWord}`);
        }

        counter++;
        match = pattern.exec(data);
    }
 
    if (counter == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (mirorPairs.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirorPairs.join(', '));
    }
}

mirrorWords(
    ['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']
    );
    console.log('----------------------------------------------------------------');
mirrorWords(
    [ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]
    );