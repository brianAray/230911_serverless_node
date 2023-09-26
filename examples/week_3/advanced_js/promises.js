/**
 * Promises are a fundamental part of asynchronous operations in JS
 * They help to simplify asynchronous coding, allowing you to work with the results of an operation once it's complete or handle errors taht may occur during the operation
 */

// Promise Creation

const myPromise = new Promise((resolve, reject) => {
    try{
        // asynchronous operation here
        let data = "success!";
        // throw new Error("Error");
        resolve(data);
    }catch(err){
        reject(err)
    }
})

myPromise
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

/**
 * Promises take two function arguments, resolve and reject
 * You call resolve when the async operation is successful
 * You call reject when it encounters an error
 */

/**
 * Promise States
 * 
 * Pending: Initial state, before the promise is resolved or rejected
 * 
 * Fulfilled(Resolved): The state when successfuly resolved
 * 
 * Rejected: When the promise is rejected, indicating an error has occurred
 */

// read a file

const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err){
        console.error('An error has occurred:', err);
    }

    const newFileName = data + '.txt';

    fs.readFile(newFileName, 'utf-8', (err, data2) => {
        if(err){
            console.error('An error has occurred:', err);
        }

        console.log(data2);
    })

})

function readFilePromise(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

readFilePromise('example.txt')
    .then((data) => {
        const fileName = data + '.txt';
        readFilePromise(fileName)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            })
    })
    .catch((err) => {
        console.error(err);
    })

async function readAndPrint() {
    try{
        const data = await readFilePromise('example.txt');
        const newFileName = data + '.txt';
        const data2 = await readFilePromise(newFileName);
        console.log(data2);
    }catch(error){
        console.error(error);
    }
}

readAndPrint();