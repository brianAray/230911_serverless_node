// Control Flow

// if statement

const age = 18;

if (age >= 18) {
    console.log("You can drive");
}

// else if statement

const temp = 25;

if (temp < 36) {
    console.log("It is freezing");
} else if (temp >= 36 && temp < 50) {
    console.log("It is cold");
} else {
    console.log("It is warm");
}

// Ternary operators

const message = age >= 18 ? "You are an adult" : "You are not an adult";
console.log(message);

// Switch statement

const day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("It is the start of the week");
        break;
    case "Wednesday":
        console.log("It is Wednesday");
        break;
    case "Friday":
        console.log("It is the end of the weekday");
        break;
    default:
        console.log("It is not a significant day");
        break;
}

const fruit = "Pie";

switch (fruit) {
    case "apple":
    case "banana":
    case "cherry":
        console.log("This is a fruit");
        break;
    default:
        console.log("This is not a recognized fruit");
}

// for, while, do-while loops

// for loop (initialization; condition; iteration)
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;

while (count < 6) {
    console.log(count); // Outputs numbers 0 - 5
    count++;
}

// do-while loop
// Similar to the while loop, but always executes at least once, even if the condition is false
let count2 = 7;

do {
    console.log(count2);
    count2++;
} while (count2 < 5); // Should be count2 < 5, not count < 5

// Loop control statements
// We have 'break' and 'continue'
// 'break' terminates the loop prematurely based on a condition
// 'continue' skips the rest of the current iteration and continues from the next

console.log("==================");

for (let i = 0; i < 6; i++) {
    if (i === 2) {
        continue; // Skip iteration when i equals 2
    }
    console.log(i);
}
