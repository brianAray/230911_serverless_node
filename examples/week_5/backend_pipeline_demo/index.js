const express = require('express');
const app = express();
const PORT = 3000;
const VERSION = 3;

app.get('/', (req, res) => {
    res.send({
        version: VERSION,
        message: "Hello, I am working!"
    });
})

app.listen(PORT, () => {
    console.log(`[VERSION: ${VERSION}] Listening on http://127.0.0.1:${PORT}`);
});