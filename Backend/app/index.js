const express = require("express");
const app = express();

const startApp = () => {
  app.listen(process.env.APP_PORT, () => {
    console.log("messenger is running ...");
  });
};

module.exports = startApp;
