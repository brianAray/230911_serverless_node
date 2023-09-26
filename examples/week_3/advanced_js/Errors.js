/**
 * Errors are any issues that occur during the execution of the program
 * It prevents it from running as intended, and can be anything from syntax, to runtime issues, or logical errors in code
 */

// custom errors
function divide(a, b){
    if (b === 0){
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// try - catch block to handle errors

try{
    console.log(divide(5, 0));
}catch(err){
    console.error(err);
}

console.log("Continuing as normal");