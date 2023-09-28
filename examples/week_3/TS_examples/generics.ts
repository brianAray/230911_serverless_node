// Array generics
/**
 * Generics allow you to create resuable functions, classes, and interfaces
 * They work with various data types while also providing type safety
 */

function reverseArray<T>(array: T[]): T[]{
    return [...array].reverse();
}

const numbers4 = [1, 2, 3, 4];
const strings = ["a", "b", "c", "d"];

console.log(reverseArray(numbers4));
console.log(reverseArray(strings));


// generic interfaces

interface Box<T> {
    value: T;
}

// usage

const numberBox: Box<number> = {value: 34};
const stringBox: Box<string> = {value: "Hello"};

// generic class
class Pair<T, U>{
    constructor(public first: T, public second: U){}
}

const numberAndString = new Pair<number, string>(43, "Hello");
const booleanAndDate = new Pair<boolean, Date>(true, new Date());

console.log(numberAndString.first);
console.log(booleanAndDate.second);
