const express = require('express');
const router = express.Router();
const userService = require('./services');

//User registration
router.route("/register").post( userService.registration );

//user login
router.route("/login").post( userService.login );

//get users
router.route("/").get( userService.users );


module.exports = router;