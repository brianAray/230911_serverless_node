/**
 * this keyword
 * The this keyword in JS is a special identifier that refers to the current object or context within which the code is executing
 * The value of this can change depending on how and where a function is called.
 * Understanding how it works is quite important to working with objects, functions, and constructors in JS
 */

// Global Context

console.log(this);

// Function context
/**
 * Inside a function, the value of this can vary depending on howt he function is called
 * 
 * In a regular function (not an arrow function), this refers to the object that called the function.
 * If called directly, it refers to the global object
 */

function greet() {
    //console.log(this === window); // true in a browser
    console.log(this === global); // true in node.js
};

greet();

// in an object method, this refers to the object that contains the method

const person = {
    name: "Jon",
    greet: function (){
        console.log(`Hello, ${this.name}`);
    }
}

person.greet();

// constructors context
// Inside a constructor function (a function used to create objects with the new keyword), this refers to the newly created instance of the object

function Person(name){
    this.name = name;
}

const john = new Person("John");
console.log(john.name);


// Arrow Function
// Arrow functions do not have their own this context, instead it is inherited from the this value of their enclosing scope

const arrowPerson = {
    name: "John",
    sayHello: () => {
        console.log(`Hello, ${this.name}`); // this.name is undefined
    }
}

arrowPerson.sayHello(); // Hello, undefined