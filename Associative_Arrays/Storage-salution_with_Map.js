function solve(data) {
    
    let storage = new Map();

    for (let info of data) {

        let productInfo = info.split(' ');
        let product = productInfo[0];
        let qty = Number(productInfo[1]);

        if (storage.has(product)) {

            let curQty = storage.get(product);
            let newQty = curQty + qty;
            storage.set(product, newQty);

        } else {

            storage.set(product, qty);

        }        
    }
    for (let [product, qty] of storage) {

        console.log(`${product} -> ${qty}`);

    } 
}

solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40',
    'apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
])