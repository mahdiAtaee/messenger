const express = require("express");
const chatRouter = express.Router();
const chatHandler = require("./handler");

chatRouter.post("/", chatHandler.init);
chatRouter.post("/message", chatHandler.saveMessage);
chatRouter.post("/finish", chatHandler.finishChat);


module.exports = chatRouter;
