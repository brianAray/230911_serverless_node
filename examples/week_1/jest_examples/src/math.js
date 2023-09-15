const mathOperations = {
    sum: (a, b) => a + b,
    diff: (a, b) => a - b,
    product: (a, b) => a * b,
    square: (a, b) => a ** b
}

// code coverage test command
// npm test -- --coverage --collectCoverageFrom="./src/**"

module.exports = mathOperations;