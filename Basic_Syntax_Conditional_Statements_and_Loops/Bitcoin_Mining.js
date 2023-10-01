function bitcoinMining(array) {
    
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let goldValue = 0;
    let myBitcoin = 0;
    let firstPurchase = 0;
    let counter = 0;

    for (let shift = 0; shift < array.length; shift++) {
        counter++;
        let curShiftGold = array[shift];

        if (counter % 3 == 0) {
            curShiftGold *= 0.70;
        }

        goldValue += curShiftGold * goldPrice;

        if (goldValue >= bitcoinPrice) {
            for (let g = goldValue; g >= bitcoinPrice; g -= 11949.16) {
                myBitcoin++;
                goldValue = goldValue - bitcoinPrice;               
                if (myBitcoin == 1) {
                    firstPurchase = counter;
                }
            }
        } 


    }

    console.log(`Bought bitcoins: ${myBitcoin}`);
    if (myBitcoin !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstPurchase}`);
    }
    console.log(`Left money: ${goldValue.toFixed(2)} lv.`);

}

// bitcoinMining([100, 200, 300]);
// bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
