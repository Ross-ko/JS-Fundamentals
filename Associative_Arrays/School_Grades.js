function schoolGrades(data) {
    
    let studentsGrades = {};

    for (let stuedntInfo of data) {

        let studentAndGrades = stuedntInfo.split(' ');
        let student = studentAndGrades[0]

        for (let i = 1; i < studentAndGrades.length; i++) {

            let curGrade = studentAndGrades[i];

            if (studentsGrades.hasOwnProperty(student)) {
                studentsGrades[student] += curGrade;
            } else {
                studentsGrades[student] = curGrade;
            }

        }       
    }
    
    let sortedStudents = Object.entries(studentsGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (let studentData of sortedStudents ) {
        let student = studentData[0];
        let grades = studentData[1].split('');
        let sumG = 0;
        for (let curG of grades) {
            sumG += Number(curG);
        }
        let avrG = (sumG / grades.length).toFixed(2)
        console.log(`${student}: ${avrG}`);
    }

}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);