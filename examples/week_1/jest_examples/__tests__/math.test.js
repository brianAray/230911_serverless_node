const mathOperations = require('../src/math');

// Version 1
test("Adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
})

// Version 2
/**
 * AAA Pattern
 */
describe("Calculator Tests", () => {
    test('Adding 4 + 5 should return 9', () => {
        // Arrange
        const a = 4;
        const b = 5;

        // Act
        const result = mathOperations.sum(a, b);

        // Assert
        expect(result).toBe(9);
    })
})

// The describe block is an outer description for the test suite
// the individual test block represents a signle test
// the expect block is an assertion

// Failing test
// describe('Failing tests for calculator', () => {
//     test('adding 5 + 3 should return 8', () => {
//         // arrange and act
//         let result = mathOperations.sum(5, 3);

//         // assert
//         expect(result).toBe(10);
//     })
// })

// More examples

describe("Calculator Tests Expanded", () => {
    test('Subtracting 2 from 10 should return 8', () => {
        // arrange and act
        let result = mathOperations.diff(10, 2);

        // assert
        expect(result).toBe(8);
    })
    test('Multiplying 2 by 10 should return 20', () => {
        // arrange and act
        let result = mathOperations.product(2, 10);

        // assert
        expect(result).toBe(20);
    })
})


