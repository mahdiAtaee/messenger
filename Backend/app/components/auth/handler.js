const authService = require("./authService");
const { randomHash } = require("../../services/hash");
const token = require("../../services/token");

exports.register = async (req, res) => {
  const userData = req.body;
  userData.hash = randomHash();
  const newUser = await authService.register(userData);
  if (newUser) {
    res.send({
      success: true,
      token: token.sign({
        uid: newUser.id,
      }),
    });
  }
  res.send({
    success: false,
  });
};
