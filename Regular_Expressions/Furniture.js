function furniture(data) {
    
    let pattern = />>(?<product>[A-Z]+[a-z]*)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let totalSum = 0;
    let command = data.shift();
    let purchases = [];

    while (command != 'Purchase') {
        
        let match = pattern.exec(command);

        if (match) {
            let { product, price, quantity } = match.groups;
    
            productPrice = Number(price) * Number(quantity);
            totalSum += productPrice;

            purchases.push(product)
        }

        command = data.shift();
    }
console.log("Bought furniture:");

if(purchases.length > 0) {
console.log(purchases.join('\n'));
}

console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3', '>>TV<<300.21314!5', '>Invalid<<!5', '>>TV<<300.21314!20', '>>Invalid<!5', '>>TV<<30.21314!5', '>>Invalid<<!!5', 'Purchase']);