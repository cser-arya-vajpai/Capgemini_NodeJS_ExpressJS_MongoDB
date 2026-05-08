const { Schema, model } = require("mongoose");

const pendingUserSchema = new Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  otp: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300
  }

});

module.exports = model("PendingUser", pendingUserSchema);