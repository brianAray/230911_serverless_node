/**
 * Accessing Environment Variables
 * 
 * This is done using the process.env object in node.js depending on your environment, it is different for browsers
 * 
 * Environment Variables are used to store configuration settings, sensitive information, or data that should not be hard coded in your codebase
 */

// accessing an environement variable

const nodePath = process.env.NVM_SYMLINK;

console.log(nodePath);