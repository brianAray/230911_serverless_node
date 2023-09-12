// Type Coercion
/**
 * This refers to the automatic conversion of one data type to another when performing operations or comparisons that involve different data types.
 * JS is a loosely typed language, which means it doesn't require explicit data type declaration.
 */

// Implicit Type Coercion (Auto Conversion)
const num = 5;
const str = "10";
const result = num + str; // The number is coerced into a string, and then concatenation is done
console.log(result); // "510" (a string)

// Comparison and Loose Equality (==)
const x = 5;
const y = "5";
console.log(x == y); // true (type coercion converts string to number)

// Comparison with Strict Equality (===)
console.log(x === y); // false (strict comparison considers data type)

/**
 * Truthy and Falsy
 * JavaScript has truthy and falsy values, where certain values are converted to a boolean based on their data type.
 */

if ("hello") {
    // This will be executed because "hello" is truthy
    console.log("truthy");
} else {
    console.log("falsy");
}

if (0) {
    console.log("truthy");
} else {
    // This will be executed because 0 is falsy
    console.log("falsy");
}

// Explicit Type Conversion
// If you want to explicitly convert data types, use functions like Number(), String(), Boolean()
const numStr = "42";
const number = Number(numStr);
console.log(number); // 42 (a number)
