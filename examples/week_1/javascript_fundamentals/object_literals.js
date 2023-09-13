/**
 * Object literals are a way to create an object by specifying its properties and values directly within the curly braces
 */

const person = {};

person.firstName = "Mike";

console.log(person);

const person2 = {
    firstName: "John",
    lastName: "Jones",
    age: 36
};

console.log(person2);

// accessing properties with the . operator

console.log(person2.age);

// add or modify properties

person2.address = "123 Main Street";
person2.age = 31;

console.log(person2);

// delete property

delete person2.address;

console.log(person2);

// Object methods
// You can include functions inside an object as a property, turning them into object methods

const person3 = {
    name: "Mike Jons",
    sayHello: function (){
        console.log(`Hello, ${this.name}`);
    }
};

person3.sayHello();

// short hand property ES6
// You can use shorthand proeprty names when the property name matches the variable name

const firstName = "Jane";
const lastName = "Smith";

const person4 = {
    firstName,
    lastName,
    age: 35
};

console.log(person4);

