function calculateSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    let basicSalary = Number(document.getElementById("basicSalary").value);
    let benefits = Number(document.getElementById("benefits").value);
    
    let nssfDeductions = 0;
    if (grossSalary <= 6000) {
        nssfDeductions = grossSalary * 0.06;
    } else if (grossSalary <= 18000) {
        nssfDeductions = 360 + ((grossSalary - 6000) * 0.06);
    } else {
        nssfDeductions = 1080;
    }

    let nhifDeductions = 0;
    if (grossSalary <= 5999) nhifDeductions = 150;
    else if (grossSalary <= 7999) nhifDeductions = 300;
    else if (grossSalary <= 11999) nhifDeductions = 400;
    else if (grossSalary <= 14999) nhifDeductions = 500;
    else if (grossSalary <= 19999) nhifDeductions = 600;
    else if (grossSalary <= 24999) nhifDeductions = 750;
    else if (grossSalary <= 29999) nhifDeductions = 850;
    else if (grossSalary <= 34999) nhifDeductions = 900;
    else if (grossSalary <= 39999) nhifDeductions = 950;
    else if (grossSalary <= 44999) nhifDeductions = 1000;
    else if (grossSalary <= 49999) nhifDeductions = 1100;
    else if (grossSalary <= 59999) nhifDeductions = 1200;
    else if (grossSalary <= 69999) nhifDeductions = 1300;
    else if (grossSalary <= 79999) nhifDeductions = 1400;
    else if (grossSalary <= 89999) nhifDeductions = 1500;
    else if (grossSalary <= 99999) nhifDeductions = 1600;
    else if (grossSalary >= 100000) nhifDeductions = 1700;

    // PayAsYouEarn Calculation
    let taxableIncome = grossSalary - nssfDeductions; 
    let payeeTax = 0;

    if (taxableIncome <= 24000) {
        payeeTax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        payeeTax = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else {
        payeeTax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3);
    }

    //personal relief
    const personalRelief = 2400;
    payeeTax = payeeTax - personalRelief;

    // The Net Salary
    const netSalary = (nssfDeductions + nhifDeductions + payeeTax) - grossSalary;
}

