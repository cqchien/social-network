const mongoose = require("mongoose");
const ProfileSchema = require("./profile");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    unique: true,
    require: true
  },
  profile: ProfileSchema,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  email: String,
  groups: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group"
    }
  ]
});

module.exports = UserSchema;
