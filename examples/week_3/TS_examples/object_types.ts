/**
 * Object types are used to specify the structure of an object
 * You can defien the properties the object should have, along with its data type
 */

// Object type

let Mike: {} = {
    name: "Mike",
    age: 54
};

// explicit with names and data types

let Alice: {name: string, age: number} = {
    name: "Alice",
    age: 34
}

let John: {name: string, age: number} = {
    name: "John",
    age: 34
}

// custom types
// Type aliasing

type Student = {
    name: string;
    age: number;
    isStudent: boolean;
};

let Jones: Student = {
    name: "Jones",
    age: 34,
    isStudent: false
};

// Optional Properties

type Plumber = {
    name: string;
    freelance?: boolean;
};

let Kim: Plumber = {
    name: "Kim"
}

// Readonly Properties

type Point = {
    readonly x: number;
    readonly y: number;
}

const origins: Point = {x: 0, y: 0};

// origins.x = 3;



// Interfaces

/**
 * An interface is a contract that classes or objects must adhere to
 * They enforce a specific structure on objects and classes
 */

interface User {
    id: number;
    name: string;
    email: string;
}

function getUserInfo(user: User): string {
    return `ID: ${user.id}, name: ${user.name}, email: ${user.email}`;
}

console.log(getUserInfo({id: 1, name: "Jon", email: "email@emial.com"}));

// Differences between interfaces and type aliases

// interfaces can be extended/ implemented

interface PersonInterface {
    name: string;
}

interface Address {
    street: string;
}

interface Contact extends PersonInterface, Address {
    email: string;
}

// type aliases do not support this

// Compatibility
// Interfaces are open ended by defailt, meaning you can add properties after its defined
// This allows for gradual interface expansion

// type aliases are not open ended and cannot be extended after they are defined

// Intersection types
// Type aliases can represent intersection types using the & operator

type A = { x: number};
type B = { y: string};
type C = A & B; // intersection of types A and B

const double: C = {x: 1, y: "Hello"};

// interfaces do not support intersection types this way


// interfaces support implementing in classes

class PersonClass2 implements User {
    id: number;
    name: string;
    email: string;
    
    constructor(id: number, name: string, email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

// Preference
/**
 * Use itnerfaces when defining the shape of objects or when creating contracts for classes to adhere to
 * 
 * Use type aliases when creating complex, reusable types that may not necessarily represetn objects or classes
 * 
 */

