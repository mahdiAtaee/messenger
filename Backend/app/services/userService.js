const { getAvatarUrl } = require("./gravatar");

exports.buildUserProfile = (user) => {
  return {
    hash: user.attributes.hash,
    name: user.attributes.full_name,
    email: user.attributes.email,
    avatar: getAvatarUrl(user.attributes.email),
  };
};
