const crypto = require('crypto');
const { parentPort } = require('worker_threads');

function randomString(){
    const stringSize = 20;
    return crypto.randomBytes(stringSize).toString();
}

const hash = crypto.createHash('sha256');

for (let i = 0; i < 1000000; i++){
    hash.update(randomString());
}

parentPort.postMessage('Finished Long Running Task!');
