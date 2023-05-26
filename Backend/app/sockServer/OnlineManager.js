const OnlineUser = require("../db/model/mongo/OnlineUsers");
const User = require("../db/model/bookshelf/user");
const { buildUserProfile } = require("../services/userService");
const eventHandler = require("./EventHandler");
const cacheService = require("../services/cacheService");
const axios = require("axios");
exports.addOnlineUser = async (id, ip) => {
  const user = await User.where({ hash: id })
    .fetch()
    .then((user) => user);
  if (!user) {
    throw new Error(`there is no user with hash ${id} exist!`);
  }
  const ipAddress = '5.112.234.41';
  const response = await axios.get(`http://ip-api.com/json/${ipAddress}`);
  const isOnlineUserExist = await OnlineUser.findOne({
    "user.hash": { $eq: id },
  }).exec();
  
  if (isOnlineUserExist) {
    return true;
  }
  const locations = [[35.73961426105659,51.34153521445313],[35.66173490966943,51.447278622656256],[35.707653894004274,51.268064145117194]]
  const selectedLocation =
    locations[Math.floor(Math.random() * locations.length)];
  const onlineUser = await OnlineUser.create({
    user: buildUserProfile(user),
    location: {
      type: "Point",
      coordinates: [response.data.lat, response.data.lon],
    },
  });
  
  await OnlineUser.on("index", (error) => {
    console.log("error index", { error });
  });
  return true;
};
exports.removeOnlineUser = async (id) => {
  await OnlineUser.deleteOne({ "user.hash": { $eq: id } }).exec();
  return true;
};
exports.broadCastOnlineUsers = async () => {
  const onlineUsers = await OnlineUser.find({}).select({ _id: 0 });
  if (!onlineUsers || onlineUsers.length === 0) {
    return false;
  }
  onlineUsers.forEach(async (onlineUser) => {
    const userLocation = onlineUser.location.coordinates;
    const cacheKey = `online-user-near-by-${onlineUser.user.hash}`;
    const cachedOnlineUsers = await cacheService.get(cacheKey);
    if (cachedOnlineUsers) {
      eventHandler.$emit("onlineUsers", {
        to: onlineUser.user.hash,
        onlineUsers: JSON.parse(cachedOnlineUsers),
      });
      return true;
    }
    const onlineUsers = await OnlineUser.find(
      {
        location: {
          $near: {
            type: "Point",
            coordinates: userLocation,
          },
        },
      },
      {
        maxDistance: 5000,
      }
    )
      .select({ _id: 0, user: 1, location: 1 })
      .exec();
    if (!onlineUsers) {
      return false;
    }
    cacheService.set(cacheKey, JSON.stringify(onlineUsers), 5 * 60);
    eventHandler.$emit("onlineUsers", {
      to: onlineUser.user.hash,
      onlineUsers: onlineUsers,
    });
  });
};
