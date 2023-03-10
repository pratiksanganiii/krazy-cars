const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = Schema({
  isAdmin: { type: Boolean, default: false },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model("User", userSchema);

userSchema.pre("save", (next) => {
  if(!this.isModified("password")){
    next()
  }
});
module.exports = User;
