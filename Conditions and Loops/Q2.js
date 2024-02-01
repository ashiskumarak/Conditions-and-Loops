// Function to grade students
function gradeStudent(marks) {
    if (marks > 90) {
        return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
        return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
        return 'C Grade';
    } else {
        return 'F Grade';
    }
}


const student1Marks = 95;
const student2Marks = 80;
const student3Marks = 60;

console.log(`Student 1: ${gradeStudent(student1Marks)}`);
console.log(`Student 2: ${gradeStudent(student2Marks)}`);
console.log(`Student 3: ${gradeStudent(student3Marks)}`);
