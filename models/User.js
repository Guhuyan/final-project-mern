const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: {
    type: String,
    required: true,
    min: [4, "Username needs to be 4 characters or longer."]
  },
  password: {
    type: String,
    required: true,
    min: [6, "Password needs to be 6 characters or longer."]
  },
  secret: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
