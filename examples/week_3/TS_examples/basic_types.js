// number
var age = 20;
var price = 19.99;
// string
var name2 = "alice";
// boolean
var isStudent = true;
// array
var numbers = [1, 2, 3];
var fruits = ["apple", "banana", "cherry"];
// Tuple
/**
 * A tuple is a typed array with a pre-defined length and types for each index
 *
 * They are helpful because they allow each elelemnt in the array to be a known value
 */
var person = ["Mike", 30];
// Enum
/**
 * An Enum is a class that represents a group of constants
 *
 * Enums come into two types, strings and numerics
 */
// Numeric Enums
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.West;
console.log(currentDirection); // 3
//currentDirection = "North";  North is not a valid enum
// numeric enums initialized
var CardinalDirectionsInitialized;
(function (CardinalDirectionsInitialized) {
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["North"] = 5] = "North";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["East"] = 6] = "East";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["South"] = 7] = "South";
    CardinalDirectionsInitialized[CardinalDirectionsInitialized["West"] = 8] = "West";
})(CardinalDirectionsInitialized || (CardinalDirectionsInitialized = {}));
var currentDirection2 = CardinalDirectionsInitialized.East;
console.log(currentDirection2);
// Numeric Enums fully initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Accepted);
// String Enums must all be fully initialized
var CardinalDirectionsStrings;
(function (CardinalDirectionsStrings) {
    CardinalDirectionsStrings["North"] = "North";
    CardinalDirectionsStrings["East"] = "East";
    CardinalDirectionsStrings["South"] = "South";
    CardinalDirectionsStrings["West"] = "West";
})(CardinalDirectionsStrings || (CardinalDirectionsStrings = {}));
console.log(CardinalDirectionsStrings.North);
