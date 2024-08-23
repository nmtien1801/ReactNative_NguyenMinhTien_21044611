/*
    Coding Challenge #1
    Mark and John are trying to compare their BMI (Body Mass Index), which is
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg
    and height in meter).

    Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about
    whether Mark has a higher BMI than John.

    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
    m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
    m tall.
*/

//  1. Store Mark's and John's mass and height in variables
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// 2. Calculate both their BMIs using the formula
function calculateBMI(mass, height) {
    return mass / (height * height);
}

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        return true;
    } else {
        return false;
    }
}

let markHigherBMI1 = compareBMI(markBMI1, johnBMI1);
console.log(`Mark's BMI 1: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI 1: ${johnBMI1.toFixed(2)}`);

console.log(`Is Mark's BMI higher than John's? ${markHigherBMI1}`);

let markHigherBMI2 = compareBMI(markBMI2, johnBMI2);
console.log(`Mark's BMI 2: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI 2: ${johnBMI2.toFixed(2)}`);
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI2}`);

console.log("--------------------------------------------------");

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)
*/

if (markHigherBMI1) {
    console.log(
        `Mark's BMI (${markBMI1.toFixed(
        2
      )}) is higher than John's (${johnBMI1.toFixed(2)})`
    );
} else {
    console.log(
        `John's BMI (${johnBMI1.toFixed(
        2
      )}) is higher than Mark's (${markBMI1.toFixed(2)})`
    );
}

if (markHigherBMI2) {
    console.log(
        `Mark's BMI (${markBMI2.toFixed(
        2
      )}) is higher than John's (${johnBMI2.toFixed(2)})`
    );
} else {
    console.log(
        `John's BMI (${johnBMI2.toFixed(
        2
      )}) is higher than Mark's (${markBMI2.toFixed(2)})`
    );
}

console.log("--------------------------------------------------");