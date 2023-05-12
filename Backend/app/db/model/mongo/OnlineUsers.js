const { Schema, model } = require("mongoose");
const OnlineUsersSchema = new Schema(
  {
    user: Schema.Types.Mixed,
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
OnlineUsersSchema.index({ location: "2dsphere" });
const OnlineUser = model("OnlineUsers", OnlineUsersSchema);
module.exports = OnlineUser;
