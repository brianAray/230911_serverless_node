// Template Literals

/**
 * Introduced in ES6, they provide a more flexible and readable way to create strings in JS.
 * You use `` instead of '' or "".
 */

// Basic
const firstName = "Alice";
const greeting = `Hello, ${firstName}`;
console.log(greeting);

// You are embedding expressions using ${}, the expressions are evaluated and then inserted into the string.

// Expression evaluation
console.log(`5 + 5 = ${5 + 5}`);

// Multiline strings
const multiLine = `
This is a
Multi
Line
String.
`;
console.log(multiLine);
