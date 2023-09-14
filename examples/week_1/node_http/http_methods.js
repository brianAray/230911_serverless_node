// HTTP Methods
const http = require("http");
const url = require('node:url');
const PORT = 3000;

const server = http.createServer((req, res) => {

    // GET
    if (req.method === 'GET' && req.url === '/api/data'){
        res.writeHead(200, { 'Content-Type': 'application/json'});
        const data = {message: 'This is GET data'};
        res.end(JSON.stringify(data));
    //POST
    }else if(req.method === 'POST' && req.url === '/api/create'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            // you are meant to store this data somewhere
            // maybe a database??
            console.log(data);

            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Resource Created Successfully!'}));
        });

    }else if(req.method === "PUT" && req.url === '/api/update'){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            // you are meant to store this data somewhere
            // maybe a database??
            console.log(data);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Resource Created Successfully!'}));
        });
    }else if(req.method === "DELETE"){
        const requestUrl = url.parse(req.url).query;
        // delete item
        console.log(requestUrl);
        res.writeHead(201, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Resource Deleted Successfully!'}));
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }

})

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})