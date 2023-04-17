const crypto = require("crypto");

exports.randomHash = (length = 10) => {
  return crypto.randomBytes(length).toString("hex");
};
