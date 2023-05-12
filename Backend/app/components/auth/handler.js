const authService = require("./authService");
const { randomHash } = require("../../services/hash");
const token = require("../../services/token");

exports.register = async (req, res) => {
  const userData = req.body;
  userData.hash = randomHash();
  const newUser = await authService.register(userData);
  if (newUser) {
    return res.send({
      success: true,
      message: "ثبت نام با موفقیت انجام شد.",
    });
  }
  return res.send({
    success: false,
    message: "خطایی در فرایند ثبت نام رخ داده است",
  });
};

exports.login = async (req, res) => {
  const userCredential = req.body;
  const loginResult = await authService.login(
    userCredential.email,
    userCredential.password
  );
  if (!loginResult) {
    return res.status(400).send({
      success: false,
      message: "ایمیل یا رمز عبور اشتباه وارد کرده اید.",
    });
  }
  return res.send({
    success: true,
    isUserLoggedIn: true,
    token: token.sign({
      uid: loginResult.hash,
    }),
  });
};
