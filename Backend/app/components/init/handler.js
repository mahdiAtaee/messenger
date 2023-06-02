const tokenService = require("../../services/token");
const User = require("../../db/model/bookshelf/user");
const { buildUserProfile } = require("../../services/userService");
const { fetchRecentChat } = require("../../services/initService");

exports.init = async (req, res) => {
  const token = tokenService.findToken(req);

  if (!token) {
    return res.status(401).send({
      success: false,
      message: "دسترسی غیرمجاز",
    });
  }
  try {
    const { uid } = tokenService.verify(token);
    const user = await User.where({ hash: uid })
      .fetch()
      .then((user) => user);
    const userRecentChat = await fetchRecentChat(uid);
    return res.send({
      success: true,
      me: buildUserProfile(user),
      userRecentChat: userRecentChat,
    });
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "دسترسی غیرمجاز",
      error,
    });
  }
};
