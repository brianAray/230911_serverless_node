/**
 * Functions are a fundamental concept in JS, allowing you to group and encapsulate a block of code.
 */

// Function Declaration
// You can declare a function using the function keyword, followed by a name, a list of parameters, and a block of code in curly braces

console.log(add(12, 55)); // This works because of function hoisting

function sayHello(name) {
    console.log("Hello " + name);
}

// Function Invocation
sayHello("Mike");
sayHello(3);
sayHello({ name: "John" });

// Return Statement
function add(a, b) {
    return a + b;
}

let sum = add(3, 5);
console.log(sum);

// Function Scope
/**
 * Variables declared inside a function are scoped to that function and are not accessible from outside that function.
 * However, a variable declared outside a function (in global scope) can be accessed within that function.
 */

// Function Hoisting
/**
 * Function declarations are hoisted, which means they can be used before they are declared.
 */

// Closure
/**
 * JavaScript functions can form closures, which means they can remember and access variables from their containing (enclosing) scope
 * even after the outer function has finished executing.
 */

function outer() {
    let message = "hello, ";

    function inner(name) {
        console.log(message + name);
    }

    return inner;
}

let greet = outer();
greet("Alice");

// Default Parameters
/**
 * Introduced in ES6, default parameters allow you to specify default values for function parameters.
 * This prevents undefined values from showing up in your code and causing crashes.
 */

function greetWithDefaults(name = "Guest") {
    console.log("Hello ", name);
}

greetWithDefaults("Alice"); // "Hello Alice"
greetWithDefaults(); // "Hello Guest" (uses the default value)
