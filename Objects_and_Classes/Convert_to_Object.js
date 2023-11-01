function convertToObject(data) {
    let personInfo = JSON.parse(data);

    for (let [key, value] of Object.entries(personInfo)) {
        console.log(`${key}: ${value}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');