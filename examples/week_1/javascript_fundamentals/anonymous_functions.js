/**
 * An anonymous function is a function that does not have a name
 * Instead of defining a named function with the keyword function, you define it as an expression
 * 
 * These are often used as arguments to other functions or to create immediately invoked function expressions (IIFE)
 */

// Function Expression

function name(){

}

const add = function(a, b){
    return a + b;
}

const result = add(4, 5); // 9

// call back function
// anonymous functions are frequently used as a callback function passed to higher order functions like forEach, map, filter, and event handlers

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number){
    console.log(number);
});

// IIFE (Immediately Invoked Function Expression)
// an anonymous function that is immediately executed after it is defined
// often used to create a private scope for variables

(function () {
    const message = "This is an IIFE";
    console.log(message);
})();


// Arrow Functions 
// Arrow functions are a concise way of defining an anonymous function

/**
 * 
 * 
 * const functionName = (parameters) => {
 *  // function body
 * }
 * 
 * If there is only one line, then you can omit the {}
 * It also has an implicit return if it is a one liner, if there are multiple lines then you need to include the return keyword
 * 
 * 
 */

const multiply = (a, b) => a * b;
const square = x => x * x;

// if there are no parameters, use an empty parenthesis

const sayHello2 = () => console.log("Hello");

// There is no this binding
/**
 * Arrow functions do not have their own this binding, they inherit it from their enclosing (lexical) context
 */

function Person(name){
    this.name = name;
    this.sayHello = () => {
        console.log(`Hello, ${this.name}`);
    };
}

const person = new Person("John");
person.sayHello();
