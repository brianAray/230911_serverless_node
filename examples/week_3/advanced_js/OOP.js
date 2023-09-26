// Object Oriented programming in JS
// Objects and Classes
// Everything (almost) in JS is an object
// Classes were introduced later in ES6, which gives a class syntax
// Classes are blueprints to make objects

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name}`);
    }
    
}

const person1 = new Person("John", 50);

console.log(person1);
person1.greet();

// Inheritance in JS

class Student extends Person {
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Mike", 30, 123412);

console.log(student1);
student1.study();
student1.greet();

// JS doesn't have explicit access modifiers like other languages, you have to use closures and naming conventions to control access to properties 

// Polymorphism is supported through method overriding, where a subclass can provide its implemetnation of a method

// Abstraction is done through the use of classes and objects

// there are static methods and properties

class MathUtils {
    static add(x, y){
        return x + y;
    }
}

const result = MathUtils.add(1, 2);

/**
 * Prototypes
 * 
 * Prototypical Inheritance is a fundamental concept in JS that allows objects to inherit properties and methods from other objects
 * Unlike calssical inheritance found in Java or C++, JS uses prototype-based inheritance.
 * In this model, objects inherit directly from other objects, and there are no classes in a traditional sense
 * 
 * 
 */

// Prototypes and Objects
// Every JS object has an associated prototype, a prototype is an object like any other that the current object inherits its properties and methods from
// Objects are linked to their prototypes

// If you want to acces the object's prototype, you use the __proto__ property or Object.getPrototypeOf() method

const child = {};
const parent = {name: "John"};

child.__proto__ = parent; // set child's prototype to parent

// Object.setPrototypeOf(child, parent);

console.log(Object.getPrototypeOf(child));

// Constructor Functions
// Constructor functions can be used to create objects with shared properties and methods
// When an object is created using a constructor, it inherits from the constructor's prototype

function PersonProto(name){
    this.name = name;
}

PersonProto.prototype.greet = function (){
    console.log(`Hello, my name is ${this.name}`);
}

const john = new PersonProto("John");
john.greet();


// Getter and Setter methods

class Circle{
    constructor(radius){
        this._radius = radius; // private property
    }
    
    get radius(){
        return this._radius;
    }

    set radius(value){
        if(value < 0){
            throw new Error("Radius cannot be negative");
        }
        this._radius = value;
    }
}

const circle1 = new Circle(5);

circle1.radius = -1;

console.log(circle1.radius);