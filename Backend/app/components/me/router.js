const express = require("express");
const meRouter = express.Router();
const meHandler = require("./handler");

meRouter.post("/location", meHandler.setLocation);

module.exports = meRouter;
