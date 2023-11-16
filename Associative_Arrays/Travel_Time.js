function travelTime(data) {
    
    let destinations = {};

    for (let destInfo of data) {
        let [country, town, cost] = destInfo.split(' > ');
        cost = Number(cost);

        if (country in destinations) {
            if (town in destinations[country]) {
                if (cost < destinations[country][town]) {
                    destinations[country][town] = cost;
                }
            } else {
                destinations[country][town] = cost;
            }
        } else {
            destinations[country] = {[town]: cost};
        }
    }
    let sortedCountries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for ( let [country, towns] of sortedCountries) {
        let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);

        let answer = `${country} -> `;

        for (let [town, cost] of sortedTowns){
            answer += `${town} -> ${cost} `
        }

         console.log(answer);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);