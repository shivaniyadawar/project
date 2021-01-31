const express = require("express");

const userRoute = require('./main/route/loginRoute')
const helpRoute = require('./main/route/helpRoute')


module.exports = function(app) {
    app.use(express.json());
    app.use("/user", userRoute);
    app.use("/help", helpRoute);
};