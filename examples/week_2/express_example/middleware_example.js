/**
 * Middleware
 * It is a function or a set of functions that sit between requrests and responses in the application request-response cycle
 * 
 * Middlware is used for a number of things:
 * 
 * - Parsing incoming request data (JSON, form data, etc)
 * - Authenticating requests and validating user permissions
 * - Adding common headers to response
 * - Logging requests and responses
 * - Rendering views
 * 
 */

const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = 3000;

server.use(bodyParser.json());

// custom middleware

function addDate(req, res, next){
    req.date = new Date(); // Adding a new date property to the incoming request
    next(); // continues the cycle of the req - res
};

// This will add the middleware to every endpoint
// server.use(addDate);

server.get('/', (req, res) => {
    res.send({
        message: "Hello World",
        date: req.date
    });
});



// Middleware can be added to a specific endpoint as another parameter to the function
server.get('/item', addDate, (req, res) => {
    res.send({
        message: "Item",
        date: req.date
    });
})

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});