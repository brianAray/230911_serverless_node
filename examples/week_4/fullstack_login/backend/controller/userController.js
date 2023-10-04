const express = require('express');
const bodyParser = require('body-parser');
const userService = require('../service/userService');
const router = express.Router();

router.use(bodyParser.json());

// login endpoint
// POST {username, password}
router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    // service method to validate input
    // service method to call database
    // on success, return 200, with user info
    const userInfo = await userService.validateLogin(username, password);
    if(userInfo){
        console.log(userInfo);
        res.status(200);
        res.send({
            message: "Successful Login",
            username: userInfo.username,
            role: userInfo.role
        })
    }else{
        res.status(400);
        res.send({
            message: "Unsuccessful Login"
        })
    }
})

module.exports = router;