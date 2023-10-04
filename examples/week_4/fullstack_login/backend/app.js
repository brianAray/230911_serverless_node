const express = require('express');
const userController = require('./controller/userController');
const app = express();
const cors = require('cors');
const PORT = 9000;

app.use(cors());

app.use('/user', userController);


app.listen(PORT, () => {
    console.log(`Server is listening on Port : ${PORT}`);
});
