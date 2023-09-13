const greeting = "hello";

function sayHello(name){
    return `${greeting}, ${name}`;
}

const person = {
    firstName: "Mike",
    lastName: "Jones"
};

export default {
    greeting,
    sayHello,
    person
}