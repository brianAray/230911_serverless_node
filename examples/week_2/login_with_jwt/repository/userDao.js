const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient();

function retrieveByUsername(username){
    const params = {
        TableName: 'users_3',
        Key: {
            username
        }
    };

    return docClient.get(params).promise();
}

module.exports = {
    retrieveByUsername
}