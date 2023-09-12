/**
 * JavaScript Data Types
 * 
 * JavaScript is a high-level, dynamically typed programming language that supports various data types.
 */

/*
 * Numbers
 */

let age = 10;       // Integer
let price = 19.99;  // Floating-point number

/*
 * Strings
 */

let name = "John";         // Double-quoted string
let message = 'hello, world'; // Single-quoted string

/*
 * Booleans
 */

let isStudent = true;    // Represents true
let isLoggedin = false;  // Represents false

/*
 * Undefined
 */

let undefinedVariable = undefined; // Variable explicitly set to undefined
let undefinedVariable2;            // Variable declared but not assigned, also undefined

/*
 * Null
 */

let emptyValue = null; // Represents the intentional absence of any object value

/*
 * Symbol (ES6)
 */

const uniqueKey = Symbol("description"); // Creates a unique and immutable value, often used as object property keys

/*
 * BigInt
 */

const bigNumber = 1234567890123456789012345678901234567890n; // Represents arbitrary precision integers

/*
 * Console Output: Types of Variables
 */

console.log(typeof age);            // "number"
console.log(typeof price);          // "number"
console.log(typeof name);           // "string"
console.log(typeof message);        // "string"
console.log(typeof isStudent);      // "boolean"
console.log(typeof isLoggedin);     // "boolean"
console.log(typeof undefinedVariable2); // "undefined"
console.log(typeof emptyValue);     // "object" (a quirk in JavaScript)
console.log(typeof bigNumber);      // "bigint"

/*
 * Objects
 */

let person = {
    "firstName": "John",
    "lastName": "Doe"
};

let person2 = {
    firstName: "Mike",
    lastName: "Jones"
};

console.log(person);
console.log(person2);

/*
 * Arrays (Special Type of Object)
 */

let numbers = [1, 2, 3, 4, 5]; // Ordered list of values
let anyDatas = ["hello", 3, null, undefined]; // Can hold mixed data types

console.log(Array.isArray(numbers)); // Check if it's an array (true)
console.log(anyDatas);

