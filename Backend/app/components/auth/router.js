const express = require("express");
const authRouter = express.Router();
const authHandler = require("./handler");

authRouter.post("/register", authHandler.register);

module.exports = authRouter;
