// Decorators
/**
 * A way to add metadata and behaviors to classes, methods, properties, and parameters
 */
// to run it, you have to transpile with experimentalDecorators
// tsc --experimentalDecorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Class Decorators
function classDecorator(constructor) {
    console.log("Class Decorator was called");
}
var MyClass3 = /** @class */ (function () {
    function MyClass3() {
        console.log("Class Instance Created");
    }
    MyClass3 = __decorate([
        classDecorator
    ], MyClass3);
    return MyClass3;
}());
var class3 = new MyClass3();
// method decorators
function methodDecorator(target, key, descriptor) {
    console.log("Method decorator called for ".concat(key));
}
var MyClass4 = /** @class */ (function () {
    function MyClass4() {
    }
    MyClass4.prototype.greet = function () {
        console.log("Hello there");
    };
    __decorate([
        methodDecorator
    ], MyClass4.prototype, "greet");
    return MyClass4;
}());
// property decorator
function propertyDecorator(target, key) {
    console.log("Property decoratro called for ".concat(key));
}
var MyClass6 = /** @class */ (function () {
    function MyClass6() {
        this.message = "Hello, Typescript";
    }
    __decorate([
        propertyDecorator
    ], MyClass6.prototype, "message");
    return MyClass6;
}());
// parameter decorator
function parameterDecorator(target, key, index) {
    console.log("parameter decorator called for parameter ".concat(index, " of ").concat(key));
}
var MyClass7 = /** @class */ (function () {
    function MyClass7() {
    }
    MyClass7.prototype.greet = function (name, age) {
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old"));
    };
    __decorate([
        __param(0, parameterDecorator),
        __param(1, parameterDecorator)
    ], MyClass7.prototype, "greet");
    return MyClass7;
}());
