const { Schema, model } = require("mongoose");
const MessageSchema = new Schema({
  sender: {
    type: Schema.Types.String,
    required: true,
  },
  type: {
    type: Schema.Types.String,
    required: true,
    default: "text",
  },
  content: {
    type: Schema.Types.String,
    required: true,
  },
  created_at: {
    type: Schema.Types.Date,
    required: true,
    default: Date.now,
  },
});
module.exports = MessageSchema;
