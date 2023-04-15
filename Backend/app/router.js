const authRouter = require("./components/auth/router");

module.exports = (app) => {
  app.use("/api/v1/auth", authRouter);
};
