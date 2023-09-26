const express = require('express');
const crypto = require('crypto');
const {Worker, isMainThread} = require('worker_threads');

const PORT = 3000;
const app = express();

function randomString(){
    const stringSize = 20;
    return crypto.randomBytes(stringSize).toString();
}

app.get('/blocking-endpoint', (req, res) => {
    const hash = crypto.createHash('sha256');

    for (let i = 0; i < 10000000; i ++){
        hash.update(randomString());
    }

    res.send({
        message: "Finished Long Running Task"
    });
})

app.get('/non-blocking-endpoint', async (req, res) => {
    const hash = crypto.createHash('sha256');

    async function unblockUsingTimer(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 0);
        })
    }

    for (let i = 0; i < 10000000; i ++){
        hash.update(randomString());
        await unblockUsingTimer();
    }

    res.send({
        message: "Finished Long Running Task!"
    });
})

app.get('/non-blocking-worker-endpoint', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message', (message) => {
        res.send({
            message
        });
    });

    worker.on('error', (error) => {
        res.status(500).send({
            message: 'An error has occurred',
            'error': error.message
        });
    });

    worker.on('exit', (exitCode) => {
        if(exitCode !== 0){
            res.status(500).send({
                message: "Worker exited with code: " + exitCode
            });
        }
    });

})

app.get('/hello', (req, res) => {
    res.send({
        message: "Hello there!"
    });
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})