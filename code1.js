function generateStudentGrade() {
    // Prompt user for input
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

    // Check if the input is valid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Marks should be between 0 and 100.";
    }

    // Determine the grade based on the input marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    return `Grade: ${grade}`;
}

// Call the function and display the result
let result = generateStudentGrade();
console.log(result);
