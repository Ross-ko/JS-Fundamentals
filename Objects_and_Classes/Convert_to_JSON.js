function convertToJSON(name, lastName, hairColor) {

    let personInfo = {};

    personInfo['name'] = name;
    personInfo['lastName'] = lastName;
    personInfo['hairColor'] = hairColor;

    console.log(JSON.stringify(personInfo));
}

convertToJSON('George', 'Jones', 'Brown');
convertToJSON('Peter', 'Smith', 'Blond');