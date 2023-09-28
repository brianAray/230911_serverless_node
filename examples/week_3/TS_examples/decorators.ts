// Decorators
/**
 * A way to add metadata and behaviors to classes, methods, properties, and parameters
 */
// to run it, you have to transpile with experimentalDecorators
// tsc --experimentalDecorators

// Class Decorators

function classDecorator(constructor: Function){
    console.log("Class Decorator was called");
}

@classDecorator
class MyClass3{
    constructor(){
        console.log("Class Instance Created");
    }
}

const class3 = new MyClass3();

// method decorators

function methodDecorator(target: any, key: string, descriptor: PropertyDescriptor){
    console.log(`Method decorator called for ${key}`);
}

class MyClass4 {
    @methodDecorator
    greet(){
        console.log("Hello there");
    }
}

// property decorator

function propertyDecorator(target: any, key: string){
    console.log(`Property decoratro called for ${key}`);
}

class MyClass6{
    @propertyDecorator
    message = "Hello, Typescript";
}


// parameter decorator

function parameterDecorator(target: any, key: string, index: number){
    console.log(`parameter decorator called for parameter ${index} of ${key}`);
}

class MyClass7{
    greet(@parameterDecorator name: string, @parameterDecorator age: number){
        console.log(`Hello ${name}, you are ${age} years old`);
    }
}

