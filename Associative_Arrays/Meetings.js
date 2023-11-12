function meetings(data) {

    let schedule = {};

    for (let info of data) {

        let [weekday, person] = info.split(' ');

        if (schedule.hasOwnProperty(weekday)) {

            console.log(`Conflict on ${weekday}!`);

        } else {

            schedule[weekday] = person;
            console.log(`Scheduled for ${weekday}`);

        }
    }
    for (let [weekday, name] of Object.entries(schedule)) {

        console.log(`${weekday} -> ${name}`);
    }
}

meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);