var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonClass = /** @class */ (function () {
    // constructor
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
    }
    // method
    PersonClass.prototype.sayHello = function () {
        console.log("Hello. My name is ".concat(this.name));
    };
    return PersonClass;
}());
var Reyes = new PersonClass("Reyes", 30);
Reyes.sayHello();
// classes support inheritance
var StudentClass = /** @class */ (function (_super) {
    __extends(StudentClass, _super);
    function StudentClass(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    // override the method from the parent class
    StudentClass.prototype.sayHello = function () {
        console.log("Hi, I am a student at ".concat(this.school));
    };
    return StudentClass;
}(PersonClass));
var Michelle = new StudentClass("Michelle", 34, "USF");
Michelle.sayHello();
// access modifiers
var MyClass = /** @class */ (function () {
    function MyClass(publicField, privateField, protectedField) {
        this.publicField = publicField;
        this.privateField = privateField;
        this.protectedField = protectedField;
    }
    return MyClass;
}());
// static fields
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircleArea = function (radius) {
        return this.PI * radius * radius;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
console.log(MathUtils.calculateCircleArea(4));
