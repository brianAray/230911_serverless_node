// number
let age: number = 20;
let price: number = 19.99;

// string
let name2: string = "alice";

// boolean
let isStudent: boolean = true;

// array
let numbers: number[] = [1, 2, 3];
let fruits: string[] = ["apple", "banana", "cherry"];

// Null and Undefined

let nullableValue: null = null;
let undefinedValue: undefined = undefined;



// Tuple
/**
 * A tuple is a typed array with a pre-defined length and types for each index
 * 
 * They are helpful because they allow each elelemnt in the array to be a known value
 */

let person: [string, number] = ["Mike", 30];

// Enum
/**
 * An Enum is a class that represents a group of constants
 * 
 * Enums come into two types, strings and numerics
 */

// Numeric Enums

enum CardinalDirections {
    North,
    East,
    South,
    West
}

let currentDirection = CardinalDirections.West;
console.log(currentDirection); // 3

//currentDirection = "North";  North is not a valid enum

// numeric enums initialized
enum CardinalDirectionsInitialized {
    North = 5,
    East,
    South,
    West
}

let currentDirection2 = CardinalDirectionsInitialized.East;

console.log(currentDirection2);

// Numeric Enums fully initialized

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.Accepted);

// String Enums must all be fully initialized

enum CardinalDirectionsStrings {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
}

console.log(CardinalDirectionsStrings.North);

// Any

let data: any = 34;
data = "Hello";

// Unknown
let unknownData: unknown = 3;
unknownData = "hello";

// Never
// Used in advanced generics
let neverData: never;

// void
function logMessage(message: string):void{
    console.log(message);
}