const express = require("express");
const callRouter = express.Router();
const callHandler = require("./handler");

callRouter.post("/finish", callHandler.finishCall);


module.exports = callRouter;