const express = require('express');
const {LoginUser,registerUser} = require('../controller/auth.controller');


const router = express.Router();




router.post('/login',LoginUser);


router.post('/register',registerUser);



module.exports = router;


