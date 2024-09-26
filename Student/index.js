function studentGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Inavlid kindly input marks ranging from 0 - 100"
    } else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60 && marks <= 79) {
        return "Grade: B";
    } else if (marks >= 49 && marks <= 59) {
        return "Grade: C";
    } else if (marks >= 40 && marks <= 49) {
        return "Grade: D";
    } else if (marks < 40) {
        return "Grade: E";
    }
}


let marks = parseInt(prompt("Enter the students marks (between 0 - 100)"));

// console.log(studentGrade(marks));
