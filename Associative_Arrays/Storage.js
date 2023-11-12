function storage(data) {
    
    let myStorage = {};

    for (let info of data) {

        let [product, qty] = info.split(' ');

        if (!myStorage.hasOwnProperty(product)) {

            myStorage[product] = Number(qty);

        } else {

            myStorage[product] += Number(qty);

        }
    }
    for (let [product, qty] of Object.entries(myStorage)) {

        console.log(`${product} -> ${qty}`);
        
    }
}

storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40',
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);