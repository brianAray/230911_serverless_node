const AWS = require('aws-sdk');

// set  you aws region
AWS.config.update({
    region: 'us-east-1'
});

// create a dynamoDB client
const dynamoDB = new AWS.DynamoDB();

// print a list of the tables
dynamoDB.listTables({}, (err, data) => {
    if(err){
        console.error('Error', err);
    }else{
        console.log('Tables:', data.TableNames);
    }
});
