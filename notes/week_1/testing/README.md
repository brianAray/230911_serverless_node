# Unit Testing

Unit Testing is a software testing technique that focuses on verifying the correctness of individual units or components of a software in isolation.

A "unit" typically refers tot he smallest testable part of an application, which is often a function, method, or a class.

The primary goal of unit testing is to ensure that each unit of code performs its intended functionality correctly.

## Key Concepts

- **Isolation**
    - Unit tests are designed to isolate a specific unit of ocde from the rest of the application
    - This means that when unit testing a function or method, all external dependencies (e.g. database connections, network requests) are usually replaced with mock objects or sutbs
    - The focus of unit testing is on verifying behavior
- **Repeatable and Automated**
    - Unit tests are automated, meaning they can be executed repeatedly and consistently
    - Developers can run unit tests whenever they make changes to their code, helping to catch regressions (unintended side effects) early in the development process
- **Rapid Feedback**
    - You can run unit tests and check if the code behaves as expected
    - This immediate feedback helps to catch and fix issues early, reducing debugging
- **Documentation**
    - Wel--written unit tests serve as docuemntation for how individual units of code are expected to work
    - They provide a celar and exectuable specification of the code's behavior
- **Refactoring Support**
    - Unit test make it safer to refactor code
    - When you make changes to your code base, you can rely on unit tests to esnure that existing functionality remains intact
- **Test-Driven Development (TDD)**
    - TDD is a development approach in which unit tests are written before the actual code
    - Developers define the expected behavior of a unit through tests and then ipmlement the code to make the tests pass
    - This creates efficient code, well-structured, and has a clear design


## AAA Pattern

The AAA (Arrange, Act, Assert) pattern is commonly used to organize unit test in software development. It provides a clear and structured approach to writing and understanding unit tests by breaking them down into three distinct phases: Arrange, Act, and Assert

### Arrange

In this phase, you set up the preconditions and inital context for the unit tests
This typically involves:

- Creating objects or instances of classes that you want to test
- Initializing input data or parameters
- COnfiguring the test environment, including any mocks, stubs, or dependencies

The arrange phase prepares the test scenario and ensures that everythign is in place for the actual testing to occur.

### Act

In the Act phase, you perform the actual operation or action that you want to test. This is where you execute the specific method or function you want to verify.
This should be single, and a straightforward operation.

### Assert

In the Assert phase you verify the outcome of the operation or action performed in the Act phase.
You define one or more assertions to check whether the actual result matches the expected result.
If the assertions pass, the test is considered successful, if not then it is a failure.

## Mocking

Mock functions are a fundametnal concept in testing and are widely used in Jest
Mock Functions allow you to simulate the behavior of functions, methods, or modules in your code during test.
This is useful for isolating specific parts of your code for testing without involving the actual implementation.

## Code Coverage

- Make sure to put your scripts for testing inside a folder named `__tests__`
- Make sure each testing file has the file extension `<scriptName>.test.js`
- Make sure your application script is in a folder `src`

`npm test -- --coverage --collectCoverageFrom="./src/**"`
