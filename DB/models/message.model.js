const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  content: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const messageModel = model("Message", messageSchema);
module.exports = messageModel;
