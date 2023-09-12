/**
 * Variable scopes refer to the context in which a variable is declared and where it can be accessed.
 * JS has two primary types of scopes: local (function) and global scope.
 * The scope of a variable determines where in your code it is visible and can be used.
 */

// Global Scope
/**
 * Variables declared outside of any function or block have global scope.
 * Global variables are accessible from anywhere in your JS code, including inside functions.
 * They can lead to naming conflicts, so be careful about how you use them.
 */

let globalVar = 10;

function example() {
    console.log(globalVar); // Accessing the global variable
}

example();

// Local (Function) Scope
/**
 * Variables declared inside a function have local scope.
 * Local variables are only accessible within the function they are defined in.
 * They are not visible outside of the function.
 */

function exampleLocal() {
    let localVar = 20; // Local variable
    console.log(localVar);
}

exampleLocal();

// console.log(localVar); // This will throw an error

// Block Scope (ES6)
/**
 * Block scope allows variables to be scoped to code blocks (if statements, loops, etc).
 * Variables declared with let or const have block scope.
 * They are only accessible within the block they are defined in.
 */

if (true) {
    let blockVar = 30; // Block-scoped
    console.log(blockVar);
}

// console.log(blockVar); // This will throw an error: blockVar is not defined

// Lexical Scope (Closure)

/**
 * JS has lexical scope, which means that functions are able to access variables from their containing scope, even after the outer function has finished executing.
 */

function outer() {
    let message = "hello, ";

    function inner(name) {
        console.log(message + name); // Accessing the message from the enclosing scope
    }

    return inner;
}

let greet = outer();

greet("Alice");
