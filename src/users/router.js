const express = require('express');
const router = express.Router();
const userService = require('./service');

//User registration
// router.route("/register").get([auth, admin], userService.registration);
router.route("/register").post( userService.registration );

//user login
router.route("/login").post( userService.login );


module.exports = router;