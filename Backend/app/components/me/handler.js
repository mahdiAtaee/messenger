const OnlineUser = require("../../db/model/mongo/OnlineUsers");
const tokenService = require("../../services/token");

exports.setLocation = async (req, res) => {
  // const token = tokenService.findToken(req);

  // let payload = null;
  // if (!token) {
  //   return res.send({
  //     success: false,
  //     message: "توکن مد نظر یافت نشد",
  //   });
  // }
  // try {
  //   payload = tokenService.verify(token);
  // } catch (error) {
  //   return res.send({
  //     success: false,
  //     message: "توکن معتبر نمی باشد",
  //   });
  // }

  // const { uid } = payload;
  // const { longitude, latitude } = req.body;
  // const location = await OnlineUser.create({
  //   user: uid,
  //   location: {
  //     type: "Point",
  //     coordinates: [longitude, latitude],
  //   },
  // });
  // if (location) {
  //   res.send({
  //     success: true,
  //     message:"مکان در دیتابیس ذخیره شد."
  //   });
  // }
};
