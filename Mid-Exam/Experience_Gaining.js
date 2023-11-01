function experienceGaining(data) {

    let neededExp = data[0];
    let battles = data[1];
    let collectedExp = 0;
    let expPerBattle = data.slice(2);

    for (let i = 0; i < expPerBattle.length; i++) {

        let exp = expPerBattle[i];

        if ((i + 1) % 15 == 0) {
            exp = Math.ceil(exp * 1.05);
            collectedExp += exp

        } else if ((i + 1) % 5 == 0) {
            exp = Math.ceil(exp * 0.90);
            collectedExp += exp;

        } else if ((i + 1) % 3 == 0) {
            exp = Math.ceil(exp * 1.15);
            collectedExp += exp;

        } else {
            collectedExp += exp;
        }
        
        if (collectedExp >= neededExp) {
                console.log(`Player successfully collected his needed experience for ${i+1} battles.`);
                break;
            }            
        }


    if (collectedExp < neededExp) {
        console.log(`Player was not able to collect the needed experience, ${Math.ceil(neededExp - collectedExp).toFixed(2)} more needed.`)   
    }
}

experienceGaining([500, 5, 50, 100, 200, 100, 20]);
experienceGaining([400, 5, 50, 100, 200, 100, 20]);