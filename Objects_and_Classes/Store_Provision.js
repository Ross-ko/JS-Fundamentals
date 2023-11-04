function storeProvision(currentStock, orderedStock) {

    let stock = {};

    for (let i = 0; i < currentStock.length; i += 2) {

        let product = currentStock[i];
        let qty = Number(currentStock[i+1]);

        stock[product] = qty;
    }

    for (let x = 0; x < orderedStock.length; x += 2) {

        let product = orderedStock[x];
        let qty = Number(orderedStock[x+1]);

        if (product in stock) {
            stock[product] += qty;
        } else {
            stock[product] = qty;
        }
    }

    for (let [product, qty] of Object.entries(stock)) {
        
        console.log(`${product} -> ${qty}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

console.log('=============================================================================================');

storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ],
    [ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);
