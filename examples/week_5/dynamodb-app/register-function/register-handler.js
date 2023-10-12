const AWS = require('aws-sdk'); // don't need to install aws-sdk with npm
// already included in the nodejs runtime for lambda functions

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async(event) => {

    const bodyObject = JSON.parse(event.body);
    const {username, password } = bodyObject;

    try{
        await documentClient.put({
            TableName: process.env.USERS_TABLE_NAME,
            Item: {
                username,
                password
            }
        }).promise();

        return {
            statusCode: 201,
            body: JSON.stringify({
                "message": "User created Successfully!"
            })
        }

    }catch(err){
        return {
            statusCode: 500,
            body: JSON.stringify({
                "message": err.message
            })
        }
    }


}