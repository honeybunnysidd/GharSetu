const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

User.plugin(passportLocalMongoose);

const User = mongoose.model("User", reviewSchema);

module.exports = User;
