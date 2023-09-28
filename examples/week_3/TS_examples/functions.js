// function declaration
function greet(name) {
    return "Hi there, my name is ".concat(name);
}
// function expressions
var greetExpresssion = function (name) {
    return "Hello, ".concat(name);
};
// Optional and Default Parameters
function sayHello(name, age, greeting) {
    if (greeting === void 0) { greeting = 'Hello'; }
    if (age) {
        return "".concat(greeting, ", ").concat(name, "! You are ").concat(age, " years old");
    }
    else {
        return "".concat(greeting, ", ").concat(name);
    }
}
console.log(sayHello("MIke"));
console.log(sayHello("MIke", 30));
// rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3, 4, 5));
// arrow functions
var multiply = function (x, y) { return x * y; };
function greetOverload(person, age) {
    if (age) {
        return "Hello ".concat(person, "! You are ").concat(age, " years old");
    }
    else {
        return "Hello, ".concat(person);
    }
}
console.log(greetOverload("Mike"));
console.log(greetOverload("Mike", 34));
