// function declaration

function greet(name: string): string{
    return `Hi there, my name is ${name}`;
}

// function expressions

const greetExpresssion = function (name: string): string {
    return `Hello, ${name}`;
}

// Optional and Default Parameters

function sayHello(name: string, age?: number, greeting: string = 'Hello'){
    if(age){
        return `${greeting}, ${name}! You are ${age} years old`;
    }else{
        return `${greeting}, ${name}`;
    }
}

console.log(sayHello("MIke"))
console.log(sayHello("MIke", 30));

// rest parameters

function sum(...numbers: number[]): number{
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// arrow functions

const multiply = (x: number, y: number): number => x * y;

// Function overloads

function greetOverload(person: string): string;
function greetOverload(person: string, age: number): string;
function greetOverload(person: string, age?: number): string{
    if (age){
        return `Hello ${person}! You are ${age} years old`;
    }else{
        return `Hello, ${person}`;
    }
}

console.log(greetOverload("Mike"));
console.log(greetOverload("Mike", 34));
