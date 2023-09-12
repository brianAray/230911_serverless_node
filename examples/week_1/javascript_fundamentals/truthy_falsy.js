// Truthy and Falsy

// Falsy Values
/**
 * false: Boolean false is falsy
 * 0: The number zero
 * '' (Empty String): An empty string
 * null: A special value representing no value or no object
 * undefined: A value automatically assigned to uninitialized variables
 * NaN (Not-a-Number): A special value resulting from invalid mathematical operations
 */

// Truthy Values
/**
 * true: Boolean true is truthy
 * Non-Zero Number: Any number that is not zero is truthy
 * Non-Empty Strings: Any string with content is truthy
 * Objects: Even empty objects are truthy
 * Arrays: Even empty arrays are truthy
 * Functions: Any function is truthy
 * Infinity: Positive infinity is truthy
 * -Infinity: Negative infinity is truthy
 * Date Objects: Date objects are truthy
 */

// Example of using truthy value in an if statement
if ({}) {
    console.log("Truthy");
}

// Example of using truthy and falsy values in an if-else statement
if ({}) {
    // This block will execute because the object is truthy
} else {
    // This block will not execute
}
