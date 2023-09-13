/**
 * JSON (JavaScript Object Notation) is a lightweight data intercahnge format which is easy for humans to read and write, and also easy for machines to parse and generate
 * It is often used to transmit information between servers and a web application or between different parts of an application
 * 
 * Key characteristics
 * 
 * - Data Format: JSON is priamrily a data format used for representing structured data. It's often used to serialize and deserialize data, so it's used for data storage and data exchange
 * 
 * - Syntax: JSON uses a simple and readable syntax consisting of key-value pairs
 * Keys are always enclosed within Double Quotations "", and values can be strings, numbers, objects, arrays, null, or other nested JSON objects
 */

/**
 * {
 *  "name": "John Doe",
 *  "age": 30,
 *  "isStudent": false,
 *  "hobbies": ["reading", "programming"],
 *  "address": {
 *          "street": "123 Main Street",
 *          "city": "City"
 *      }
 * }
 * 
 */


/**
 * JSON.stringify() and JSON.parse()
 * 
 * stringify and parse are two JS methods used for working with JSON data
 */

const person = {
    firstName: "Mike",
    lastName: "Jones",
    age: 30,
    isStudent: false
}

const jsonString = JSON.stringify(person);

console.log(person);
console.log(jsonString);

// JSON.parse()

const jsonString2 = '{"name": "Alice", "age": 25}';

const person2 = JSON.parse(jsonString2);

console.log(person2.name);
console.log(person2.age);
