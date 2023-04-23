const authRouter = require("./components/auth/router");
const initRouter = require("./components/init/router");
const meRouter = require("./components/me/router");

module.exports = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/init", initRouter);
  app.use("/api/v1/me", meRouter);
};
