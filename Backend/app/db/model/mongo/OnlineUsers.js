const { Schema, model } = require("mongoose");
const OnlineUsersSchema = new Schema(
  {
    user: Schema.Types.String,
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    collection: "online_users",
  }
);
const OnlineUser = model("OnlineUsers", OnlineUsersSchema);
module.exports = OnlineUser;
