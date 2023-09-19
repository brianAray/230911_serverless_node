const express = require('express');
const app = express();
const PORT = 3000;

// import the router
const myRouter = require('./routes/example_router_file');

// use the router with a base url
app.use('/my-routes', myRouter);

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
