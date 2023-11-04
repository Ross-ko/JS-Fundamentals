function employees(data) {
    
    for (let employeeName of data) {

        let employee = {name: employeeName, personalNum: employeeName.length};

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }
}

employees(['Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
console.log('=============================================================================================');
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]);