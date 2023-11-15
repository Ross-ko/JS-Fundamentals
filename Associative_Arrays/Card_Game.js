function cardGame(data) {

    let matrix = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14}
    let types = {S: 4, H: 3, D: 2, C: 1}
    let playersHands = {}

    for (let playersAndDecks of data ) {

        let [player, deckStr] = playersAndDecks.split(': ');
        let deck = deckStr.split(', ');

        if (player in playersHands) {
            playersHands[player].push(...deck)
        } else {
            playersHands[player] = deck;
        }

    }

    for (let [name, cards] of Object.entries(playersHands)) {

        let withoutDuplicates = new Set(cards);
        let deckScore = 0;
        console.log(withoutDuplicates);

        for (let card of withoutDuplicates) {

            let value = card.slice(0, card.length - 1);
            let type = card.slice(card.length - 1);

            let cardPower = matrix[value] * types[type];
            deckScore += cardPower;
        }
        console.log(`${name}: ${deckScore}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);