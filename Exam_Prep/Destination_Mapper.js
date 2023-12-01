function destinationMapper(data) {
    
    let myPlaces = [];
    let travelPoints = 0;
    let pattern = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;

    let match = pattern.exec(data);
    
    while (match) {
        let place = match.groups.place;
        travelPoints += place.length;
        myPlaces.push(place);

        match = pattern.exec(data);
    }
    console.log(`Destinations: ${myPlaces.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="));
console.log('----------------------------------------------------------------');
destinationMapper(("ThisIs some InvalidInput"));