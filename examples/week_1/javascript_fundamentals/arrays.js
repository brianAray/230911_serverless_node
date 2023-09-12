// Arrays
/**
 * Arrays are data structures used to store and manipulate collections of values.
 * They can hold any data types.
 * They can grow or shrink dynamically.
 */

// Creating an array
const fruits = ["apple", "banana", "orange"];
console.log(fruits);

// Accessing an element
const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"

// Modifying an element
fruits[2] = "grape"; // Changes the third element to "grape"
console.log(fruits);

// Array methods

fruits.push("pear"); // Adds "pear" to the end of the array
console.log(fruits);

fruits.pop(); // Removes the last element ("pear")
console.log(fruits);

// Array length

const numFruits = fruits.length; // 3

// Iterating over the array using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Iterating over the indexes of the array using a for...in loop
for (const index in fruits) {
    console.log(index); // Outputs 0, 1, 2
}

// Iterating over the elements of the array using a for...of loop
for (const item of fruits) {
    console.log(item); // Outputs "apple", "banana", "grape"
}
