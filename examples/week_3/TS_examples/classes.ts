class PersonClass {
    // properties
    name: string;
    age: number;

    // constructor
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // method
    sayHello() {
        console.log(`Hello. My name is ${this.name}`);
    }
}


const Reyes = new PersonClass("Reyes", 30);

Reyes.sayHello();


// classes support inheritance

class StudentClass extends PersonClass {
    school: string;

    constructor(name: string, age: number, school:string){
        super(name, age); // call the constructor of the parent
        this.school = school;
    }

    // override the method from the parent class
    sayHello(){
        console.log(`Hi, I am a student at ${this.school}`);
    }
}

const Michelle = new StudentClass("Michelle", 34, "USF");

Michelle.sayHello();


// access modifiers

class MyClass {
    publicField: string;
    private privateField: number;
    protected protectedField: boolean;

    constructor(publicField: string, privateField: number, protectedField: boolean){
        this.publicField = publicField;
        this.privateField = privateField;
        this.protectedField = protectedField;
    }
}

// static fields

class MathUtils {
    static PI: number = 3.14159;

    static calculateCircleArea(radius: number): number{
        return this.PI * radius * radius;
    }
}

console.log(MathUtils.calculateCircleArea(4));