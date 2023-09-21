const express = require('express');
const bodyParser = require('body-parser');
const userDao = require('./repository/userDao');
const jwtUtil = require('./utility/jwt_util');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

// login endpoint

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    userDao.retrieveByUsername(username)
        .then((data) => {
            const userItem = data.Item;

            if(password === userItem.password){
                // successful login
                // create the jwt
                const token = jwtUtil.createJWT(userItem.username, userItem.role);

                res.send({
                    message : "Successfully Authenticated",
                    token : token
                })
            }else{
                res.statusCode = 400;
                res.send({
                    message: "Invalid Credentials"
                })
            }
        })
        .catch((err) => {
            console.error(err);
            res.send({
                message: "Failed to authenticate user"
            })
        });

});

app.get('/endpointforemployeesonly', (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; // ['Bearer', '<token>'];

    jwtUtil.verifyTokenAndReturnPayload(token)
        .then((payload) => {

            if(payload.role === 'employee'){
                res.send({
                    message: `Welcome Employee ${payload.username}`
                })
            }else{
                res.statusCode = 401;
                res.send({
                    message: `You are not an employee, you are a ${payload.role}`
                })
            }
        })
        .catch((err) => {
            console.error(err);
            res.statusCode = 401;
            res.send({
                message: "Failed to Authenticate Token"
            })
        })
})

app.get('/endpointforadminsonly', (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; // ['Bearer', '<token>'];

    jwtUtil.verifyTokenAndReturnPayload(token)
        .then((payload) => {

            if(payload.role === 'admin'){
                res.send({
                    message: `Welcome Admin ${payload.username}`
                })
            }else{
                res.statusCode = 401;
                res.send({
                    message: `You are not an admin, you are a ${payload.role}`
                })
            }
        })
        .catch((err) => {
            console.error(err);
            res.statusCode = 401;
            res.send({
                message: "Failed to Authenticate Token"
            })
        })
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});