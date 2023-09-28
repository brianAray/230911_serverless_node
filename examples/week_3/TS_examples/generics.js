// Array generics
/**
 * Generics allow you to create resuable functions, classes, and interfaces
 * They work with various data types while also providing type safety
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseArray(array) {
    return __spreadArray([], array, true).reverse();
}
var numbers4 = [1, 2, 3, 4];
var strings = ["a", "b", "c", "d"];
console.log(reverseArray(numbers4));
console.log(reverseArray(strings));
// usage
var numberBox = { value: 34 };
var stringBox = { value: "Hello" };
// generic class
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
var numberAndString = new Pair(43, "Hello");
var booleanAndDate = new Pair(true, new Date());
console.log(numberAndString.first);
console.log(booleanAndDate.second);
