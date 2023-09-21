const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userDao = require('./repository/userDao');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'thisisasecret',
    saveUninitialized: true,
    resave: false // save a session to the session store every time, even when nothing is changed
}))

// user sends a POST request with the necessary credentials
/**
 * {
 *  "username": "user1",
 *  "password": "pass1"
 * }
 */

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // we make a request to the database based on the username
    // then validate if it has the correct password

    userDao.retrieveByUsername(username)
        .then((data) => {
            const userItem = data.Item;

            if(userItem.password === password){
                // creata a HTTP session
                const currentSession = req.session;
                currentSession.username = username; // attaching the username as a property to the session
                currentSession.role = userItem.role; // attaching the role as a property to the session

                res.send({
                    "message": "Successfully Authenticated"
                });
            }else{
                res.statusCode = 400;
                res.send({
                    "message": "Invalid Credentials"
                });
            }
        }
    )
    .catch((err) => {
        console.error(err);
    })
}
)


app.get('/endpointforemployees', (req, res) => {
    const currentSession = req.session;

    if(currentSession.username && currentSession.role){
        if(currentSession.role === 'employee'){
            res.send({
                "message": `Welcome Employee ${currentSession.username}`
            });
        }else{
            res.statusCode = 401;
            res.send({
                "message": "You are not an employee!!"
            });
        }
    }else{
        res.statusCode = 401;
        res.send({
            "message": "You are not logged in!"
        })
    }
});

app.get('/endpointforadmins', (req, res) => {

    const currentSession = req.session;

    if(currentSession.username && currentSession.role){
        if(currentSession.role === 'admin'){
            res.send({
                "message": `Welcome Admin ${currentSession.username}`
            });
        }else{
            res.statusCode = 401;
            res.send({
                "message": "You are not an Admin!!"
            });
        }
    }else{
        res.statusCode = 401;
        res.send({
            "message": "You are not logged in!"
        })
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})