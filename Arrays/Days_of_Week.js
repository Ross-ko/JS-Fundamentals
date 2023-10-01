function daysOfWeak(day) {
    
    let days = (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])

    if (day >=1 && day <= 7) {
        console.log(days[day - 1]);
    } else {
        console.log('Invalid day!');
    }

}

daysOfWeak(7);
console.log('-----------------');
daysOfWeak(3);
console.log('-----------------');
daysOfWeak(-3);
console.log('-----------------');
daysOfWeak(5);
console.log('-----------------');
daysOfWeak(999);