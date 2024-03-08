const mongoose = require("mongoose");

// Define the chat schema
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    // Options object for the schema
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
