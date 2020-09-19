const express = require("express");
const errorHandler = require('../src/helpers/errorHandler');
const userRouter = require('../src/users/router');

module.exports = function (app) {
    app.use('/api/uploads', express.static(__dirname + '/uploads'));
    app.use(express.json({ limit: '5mb' }));
    app.use(express.urlencoded({ limit: '5mb', extended: true }));

    app.use('/', express.Router().get("/api/welcome", (req, res) => res.status(200).json({ 
        message: "Hello, welcome to nodejs boilerplate API, haha!" })
    ));
    app.use('/api/users', userRouter);

    //Central error handling
    app.use(errorHandler);                        
};