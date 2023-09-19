const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the root route');
});

router.get('/about', (req, res) => {
    res.send("About page");
});

module.exports = router;