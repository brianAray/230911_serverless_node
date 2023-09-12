// Var
/**
 * var was the original variable declaration in JS.
 * It has a few problems like a limitation in variable scoping and variable hoisting.
 * Variable hoisting is where the variable declaration is brought to the top of the script,
 * and if used before it is initialized, it will lead to undefined.
 */

console.log(name);

var name = "Mike";

/**
 * Let and Const
 * 
 * let and const are used for variable declaration in JS, introduced in ES6.
 * They provide better variable scoping and management compared to the older var.
 */

// let keyword
/**
 * let is block-scoped and only accessible within the block or function where they are defined.
 * You can reassign values declared with let.
 */

let score = 100;
console.log(score); // 100

score = 200; // Reassigning the value
console.log(score); // 200

// const keyword
/**
 * const is used to declare variables with block scope, similar to let.
 * However, variables declared with const cannot be reassigned after they are initialized.
 * They are constants.
 */

const PI = 3.14159; // Declare and initialize
// PI = 3; // Cannot reassign, this would result in an error

// Choosing between let and const
// Use let when you need to reassign the variable's value.
// Use const for values that should not change.
// In general, it is recommended to always use const unless you need to reassign, then use let.
