const groceryItemDao = require('./repository/grocery_item_dao');
const express = require('express');
const server = express();
const PORT = 3000;

const uuid = require('uuid');

const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('Hello World');
});

function validateNewItem(req, res, next){
    if(!req.body.name || !req.body.quantity || !req.body.price || !req.body.category){
        req.body.valid = false;
        next();
    }else{
        req.body.valid = true;
        next();
    }
}

server.post('/groceryitems',validateNewItem, (req, res) => {
    const body = req.body;
    if(req.body.valid){
        groceryItemDao.addGroceryItem(uuid.v4(), body.name, body.quantity, body.price, body.category)
            .then((data) => {
                res.send({
                    message: "Successfully Added Item!"
                })
            })
            .catch((err) => {
                res.send({
                    message: "Failed to Add Item!"
                })
            })
    }else{
        res.send({
            message: "Invalid Item properties"
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
});

