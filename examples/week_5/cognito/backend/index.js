const express = require('express');
const app = express();
const cors = require('cors');
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

// create user pool
AWS.config.update({region: 'us-east-1'});

const poolData = {
    UserPoolId: "us-east-1_4JbAXdk0p",
    ClientId: "4qkir30nf724c8uth9dreqlvnq"
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);



const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');



app.use(cors());
app.use(express.json());

const PORT = 3000;




// register

app.post("/users", (req, res) => {
    const { username, password, email } = req.body;

    const attributeList = [
        new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "email",
            Value: email
        }),
    ];

    userPool.signUp(username, password, attributeList, null, (err, result) => {
        if(err){
            return res.status(400).send(err.message || JSON.stringify(err));
        }

        res.send({ 
            message: "User registered successfully!", 
            user: result.user
        })
    })
})

// confirm

app.post("/confirm", (req, res) => {
    const { username, confirmationCode } = req.body;

    const userData = {
        Username: username,
        Pool: userPool
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
        if(err){
            return res.status(400).send(err.message || JSON.stringify(err));
        }

        res.send({message: "Confirmation Successful", result})
    })
})


// login

app.post("/login", (req, res) => {
    const {username, password} = req.body;

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password
    });

    const userData = {
        Username: username,
        Pool: userPool
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
            res.send({message: "Login Successful", session})
        },
        onFailure: (err) => {
            return res.status(400).send(err.message || JSON.stringify(err));
        },
    });
});





// protected

const region = 'us-east-1';
const userPoolId = 'us-east-1_4JbAXdk0p';

const client = jwksClient({
    jwksUri: `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`
})

function getKey(header, callback) {
    client.getSigningKey(header.kid, function(err, key){
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    })
}



app.get("/protected", (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; // Bearer <token>

    if(!token){
        return res.status(401).send({message: "No token provided"});
    }

    jwt.verify(token, getKey, { algorithms: ['RS256']}, (err, decoded) => {
        if(err){
            return res.status(401).send({message: "invalid token"});
        }

        res.send({message: 'you accessed protected data!', decoded});
    })
})




app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})