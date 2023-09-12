/**
 * Assignment Operators
 */

// Declaration and Assignment
let y; // Declaration
y = 20; // Assignment

let z = 30; // Combined into one step

// Right-to-Left Evaluation
let a = 5 + 5; // The expression (5 + 5) is evaluated first, and then the result is assigned to 'a'

// Reassignment
let count = 1;
count = 2;

// Multiple Assignment
let firstName = "John",
    lastName = "Doe",
    age2 = 30;

// Assignments with Other Operators
let num = 45;
num += 2; // 47


/**
 * Comparison and Logical Operators
 */

// Comparison Operators (== and !=)
// The equality operator checks if two values are equal, performing type coercion if necessary
let x = 5;
let w = "5";

console.log(x == w); // Type coercion is done to convert 'w' to a number

// Strict Comparison (=== and !==)
console.log(x === w); // Does not perform type coercion, so this is false

// Logical Operators
// Logical AND (&&)
let isAdult = true;
let hasLicense = true;
console.log(isAdult && hasLicense); // true if both conditions are true

// Logical OR (||)
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true if at least one condition is true

// Logical NOT (!)
let isSunny = false;
console.log(!isSunny); // Inverts the boolean value, so this is true
