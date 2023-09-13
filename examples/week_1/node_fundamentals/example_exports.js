
// we create the functions, classes, or variables that we need in this file
const greeting = "hello";

function sayHello(name){
    return `${greeting}, ${name}`;
}

const person = {
    firstName: "Mike",
    lastName: "Jones"
};

// we export them out using module.exports
// this is an object that contains the things that we want to export
module.exports = {
    greeting,
    sayHello,
    person
}
