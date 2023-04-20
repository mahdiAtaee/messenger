const db = require("../../db/connection/squelize");
const { hashPassword, comparePassword } = require("../../services/hash");

exports.register = async (params) => {
  params.password = hashPassword(params.password);
  const user = await db.User.create(params);
  return user;
};

exports.login = async (email, password) => {
  const user = await db.User.findOne({ where: { email } });
  if (!user) {
    return false;
  }
  if (comparePassword(password, user.password)) {
    return user;
  }
  return false;
};
