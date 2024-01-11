const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  age: Number,
  email: String,
  password: String,
  location: String,
  picture: String,
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
