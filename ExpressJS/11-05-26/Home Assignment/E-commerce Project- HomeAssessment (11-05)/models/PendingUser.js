//PendingUser collects not yet verified users. 

const { Schema, model } = require("mongoose");

const pendingUserSchema = new Schema({
  name: String,

  email: {
    type: String,
    unique: true,
  },

  password: String,

  role: {
    type: String,
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // auto delete after 10 minutes
  },
});

module.exports = model("PendingUser", pendingUserSchema);