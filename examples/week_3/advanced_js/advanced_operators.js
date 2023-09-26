/**
 * Spread and Rest Operator
 * 
 * THey both use the ... in JS and are used for working with arrays and objects
 * They provide a concise way to manipulate and destructure data
 */

// spread ...
// The spread operator allow syou to expand an iterable array (like any array or a string) into its individual elements

// copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // creates a shallow copy of the array

console.log(copiedArray);

// concatenating and array
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = [...array1, ...array2];

console.log(concatenatedArray);

// cloning objects

const originalObj = {
    a: 1,
    b: 2
};

const clonedObj = {...originalObj};
console.log(clonedObj);

// change a single element, but keep everything else

const slightlyChangedObj = {...originalObj, b: 'Hello'};

console.log(slightlyChangedObj);

// Rest operator
// We use this in function parameters as a way to destructure the assignments to gather multiple values into a single variable
// It's essentially the opposite of the spread operator

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
}

const result = sum(1, 2, 3, 4);
console.log(result);




// destructuring assignments

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

// object Destructuring

const {a, ...rest2} = {a: 1, b:2, c:3};
console.log(a);
console.log(rest2); 


/**
 * Guard Operator is used when you are not sure if a variable has a value and you want to assign something only when it doesn't have a value
 * &&
 * 
 * The && operator can be used to check and unsure that a condition is met before proceeding with further code executuion
 */

const someValue = 1;

function someFunction(data) {
    return 1;
}

// guarding against a null or undefined value
const result22 = someValue && someFunction(someValue);

// If someValue is falsy, the right side is not executed
// If someValue is truthy, someFunction is called and assigned to result

console.log(result22);