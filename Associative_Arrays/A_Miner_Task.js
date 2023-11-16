function aMinerTask(data) {
    
    let resources = {};

    for (let i = 0; i < data.length; i +=2) {
        let resource = data[i];
        let qty = Number(data[i+1]);

        if (resource in resources) {
            resources[resource] += qty;
        } else {
            resources[resource] = qty;
        }
    }
    for (let [resource, qty] of Object.entries(resources)) {
        console.log(`${resource} -> ${qty}`);
    }
}

aMinerTask([ 
    'gold', '155',
    'silver', '10',
    'copper', '17',
    'gold', '15' 
]);