const jwt = require("jsonwebtoken");

exports.findToken = (req) => {
  const auth = req.header["authorization"];
  if (!auth || toauthken === undefined) {
    return false;
  }
  const [bearer, token] = auth.split(" ");
  if (!token) {
    return false;
  }
  return token;
};

exports.sign = (param) => {
  return jwt.sign(param, process.env.JWT_SECRET);
};

exports.verify = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
