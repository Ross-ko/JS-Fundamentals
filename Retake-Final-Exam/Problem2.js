function theRace(data) {

    let pattern = /([#$%*&]{1})(?<name>[A-Za-z]+)\1=(?<codeLength>\d+)!!(?<code>.+)/;
    let validMatchDecryption = '';

    for (let i = 0; i < data.length; i++) {
        let match = pattern.exec(data[i]);

        if (match) {
            let name = match.groups.name;
            let length = Number(match.groups.codeLength);
            let code = match.groups.code;

            if (length == code.length) {
                for (let j = 0; j < code.length; j++) {
                    validMatchDecryption += String.fromCharCode(code.charCodeAt(j) + length);
                }
                console.log(`Coordinates found! ${name} -> ${validMatchDecryption}`);
            } else {
                console.log("Nothing found!");
            }
        } else {
            console.log("Nothing found!");
        }
    }
}

theRace([
    "%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S"
]);
console.log('----------------------------------------------------------------');
theRace([
    "Ian6Hutchinson=7!!\(58ycb4",
    "#MikeHailwood#!!'gfzxgu6768=11",
    "slop%16!!plkdek/.8x11ddkc",
    "$Steve$=9Hhffjh",
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    "RichardQ^uayle=16!!fr5de5kd"
])