/*
Loops are structures in programming that allow you to repeatedly execute a block of code as long as a certain condition is true. They provide a way to efficiently perform repetitive tasks and iterate over collections of data.
*/
//For loop------------------------------------------------

for (initialization; condition; increment/decrement) {
    // code to be repeated
}

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

//while loop-------------------------------------

while (condition) {
    // code to be repeated
}

let count = 1;
while (count <= 5) {
    console.log(`Iteration ${count}`);
    count++;
}

// Do-While Loop:----------------------------

do {
    // code to be repeated
} while (condition);


let count1 = 1;
do {
    console.log(`Iteration ${count1}`);
    count1++;
} while (count1 <= 5);
