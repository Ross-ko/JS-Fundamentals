function city(cityInfo) {

    for (let key in cityInfo) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}

city({name: "Sofia", 
    area: 492, 
    population: 1238438, 
    country: "Bulgaria", 
    postCode: "1000"
});