const express = require("express");
const mainRouter = express.Router();
const mainHandler = require("./handler");

mainRouter.post("/", mainHandler.init);

module.exports = mainRouter;
