const AWS = require('aws-sdk');
const s3Client = new AWS.S3();

const uuid = require('uuid');
const mime = require('mime');

exports.handler = async(event) => {
    const bodyObject = JSON.parse(event.body);

    const base64String = bodyObject.image;

    // extract the mimetype and data portion of the base64 string
    const matches = base64String.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);

    // determine the file extension based on the mime type
    const mimeType = matches[1];
    const extension = mime.getExtension(mimeType);

    const postId = uuid.v4();

    // create a buffer from the base64 data
    const imageBuffer = Buffer.from(matches[2], 'base64');

    const keyName = `${postId}.${extension}`;

    await s3Client.putObject({
        Bucket: process.env.POSTS_BUCKET_NAME,
        Key: keyName,
        Body: imageBuffer
    }).promise();

    const signedUrl = s3Client.getSignedUrl('getObject', {
        Bucket: process.env.POSTS_BUCKET_NAME,
        Key: keyName,
        Expires: 3600
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            signedUrl
        })
    }
}