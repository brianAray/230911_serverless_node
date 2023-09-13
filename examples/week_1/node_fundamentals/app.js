console.log("Hello I am a node app");

/**
 * package.json
 * 
 * It is a crucial file in Node.js projects. It is the configuration file that contains meta data about the project and its dependencies
 * It is used by NPM to manage project dependencies and scripts, or other project related info
 * 
 * 
 * Project Meta Data
 * 
 * name - name of your project, unique identifier
 * version - version of your project
 * description - short description
 * author - author of the project
 * license - license information
 */

// This will import in all of what is in the module
const example_exports = require('./example_exports');

// Named import
// this will import only the thing you want
// destructuring
const { person } = require("./example_exports");

console.log(example_exports.sayHello("Mike"));

console.log(example_exports.greeting);

console.log(person);


/**
 * CommonJS vs ES6 Modules
 * 
 * Node.js traditionally uses commonjs module systems which uses module.exports and require() for exporting and importing modules
 * 
 * 
 */