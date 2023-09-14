const http = require('http');

// creating a http server
const server = http.createServer((req, res) => {
    // request handling logic
    // res.writeHead(200, { 'Content-Type': 'text/plain'});
    // res.end('Hello World!\n');

    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end('<html><body><h1>Hello, World!</h1></body></html>');
})

const port = 3000;

server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
})