function problemTwo(data) {

    let pattern = /[@|#]+(?<eggColor>[a-z]{3,})[@|#]+[^A-Za-z0-9]*\/+(?<eggCount>\d+)\/+/g;

    let matches = pattern.exec(data);

    while (matches) {
        let { eggColor, eggCount } = matches.groups;

        console.log(`You found ${eggCount} ${eggColor} eggs!`);

        matches = pattern.exec(data);
    }
}

problemTwo(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('----------------------------------------------------------------');
problemTwo(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);