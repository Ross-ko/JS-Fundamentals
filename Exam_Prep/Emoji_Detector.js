function emojiDetector(data) {

    let emojiPattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})(\1)/g;
    let digitsPattern = /\d/g;
    let coolEmoji = [];
    let emoMatch = data[0].match(emojiPattern);
    let digMatch = data[0].match(digitsPattern);

    let coolTreshold = digMatch.reduce((acc, curDigit) => acc * curDigit, 1);

    let curEmoji = emojiPattern.exec(emoMatch);

    while (curEmoji !== null) {
        let emoji = curEmoji.groups.emoji;
        let sum = 0;
        for (let i = 0; i < emoji.length; i++) {
            let char = emoji[i].charCodeAt(0);
            sum += char;
        }
        if (coolTreshold < sum) {
            coolEmoji.push(curEmoji[0]);
        }
        curEmoji = emojiPattern.exec(emoMatch);
    }
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${emoMatch.length} emojis found in the text. The cool ones are:`);
    coolEmoji.forEach(emoji => console.log(emoji));
}

emojiDetector([("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")]);
console.log('---------------------------------------------------------------');
emojiDetector((["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]));