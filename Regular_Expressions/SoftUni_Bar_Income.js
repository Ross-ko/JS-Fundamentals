function softUniBarIncome(data) {
    
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let command = data.shift();
    let income = 0;
    
    while (command != 'end of shift') {

        let match = command.match(pattern);

        if (match) {
            let { name, product, count, price } = match.groups;

            let sum = Number(count) * Number(price);
            income += sum;

            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
        }
        command = data.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
console.log('----------------------------------------------------------------');
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);