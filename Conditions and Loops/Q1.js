/* Conditional statements are a fundamental concept in programming that allow the execution of code blocks based on wheather a specified condition evaluates to true or flase.
These statements provide to make decision in a program.
*/


//Ex:

let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}


// If else
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//if else-if
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//nested if

let y = 10;
if (y> 5) {
    console.log("y is greater than 5");
    if (y === 10) {
        console.log("y is equal to 10");
    }
}
