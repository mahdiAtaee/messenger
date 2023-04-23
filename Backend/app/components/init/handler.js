const tokenService = require("../../services/token");

exports.init = async (req, res) => {
  const token = tokenService.findToken(req);

  if (!token) {
    return res.send({
      success: false,
      message: "توکن مد نظر یافت نشد",
    });
  }
  try {
    const payload = tokenService.verify(token);
  } catch (error) {
    return res.send({
      success: false,
      message: "توکن معتبر نمی باشد",
    });
  }
  return res.send({
    success: true,
    message: "کاربر شناسایی شد.",
  });
};
