// Callbacks

function fetchData(url, callback){
    // simulate a http request
    setTimeout(() => {
        const data = "this is fetched data";
        callback(data);
    }, 1000)
}

function processData(data){
    console.log("Processing Data: ", data);
}

fetchData("http://localhost:3000/", processData);
console.log("Main program is starting...");

// Promises

function fetchDataPromise(url){
    return new Promise((resolve, reject) => {
        // simulate a HTTP request
        setTimeout(() => {
            const data = "This is fetched data";
            resolve(data);
        }, 1000);
    })
}

fetchDataPromise("http://localhost:3000")
    .then((data) => {
        console.log("Fetched Data: ", data);
    })
    .catch((err) => {
        console.error(error);
    })
console.log("Main program continues....");