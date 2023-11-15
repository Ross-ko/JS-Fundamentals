function companyUsers(data) {
    
    let companysAndEmployees = {};

    for (let info of data) {
        let [company, employee] = info.split(' -> ');

        if (company in companysAndEmployees) {
            if (!companysAndEmployees[company].includes(employee)){
                companysAndEmployees[company].push(employee)
            } 
        } else {
            companysAndEmployees[company] = [employee];
        }
    }

    let sortedResult = Object.entries(companysAndEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, emplyeeId] of sortedResult) {
        console.log(company);
        emplyeeId.forEach(id => console.log(`-- ${id}`));
    }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);