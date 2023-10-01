function thePyramidOfKingDjoser(base, increment ) {
    
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let counter = 0

    for (let steps = base; steps >= 1; steps -= 2) {
        counter++;
        if (steps > 2){
            stone += (((steps * steps) - ((steps * 4) - 4))) * increment;
        } else {
            stone += 0;
        }
        if (counter % 5 == 0 && steps > 2) {
            lapisLazuli += ((steps * 4) - 4) * increment;
        } else if (steps > 2) {
            marble += ((steps * 4) - 4) * increment;
        }
        if (steps <= 2) {
            gold += (steps * steps) * increment;
    }
}

console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
}

thePyramidOfKingDjoser(12, 1);