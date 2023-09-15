const mathOperations = require('../src/math');
// Hooks - setup and teardown

/**
 * There are 4 hooks
 * beforeEach and afterEach - Executed before and after each test in the test suite
 * beforeAll and afterAll - Executed just once for each test suite
 */

describe("Calculator with hooks", () => {
    let input1 = 0;
    let input2 = 0;

    beforeAll(() => {
        console.log("beforeAll called");
    })

    afterAll(() => {
        console.log("afterAll called");
    })

    beforeEach(() => {
        input1 = 2;
        input2 = 10;
    })

    afterEach(() => {
        console.log("AfterEach called");
    })

    test('Subtracting 2 from 10 should return 8', () => {
        // arrange and act
        let result = mathOperations.diff(input2, input1);

        // assert
        expect(result).toBe(8);
    })
    test('Multiplying 2 by 10 should return 20', () => {
        // arrange and act
        let result = mathOperations.product(input1, input2);

        // assert
        expect(result).toBe(20);
    })
})