const mongoose = require("mongoose");
const { User, Profile, Group, Comment, Post } = require("./schema/index");

module.exports = {
  User: mongoose.model("User", User, "User"),
  Profile: mongoose.model("Profile", Profile, "Profile"),
  Group: mongoose.model("Group", Group, "Group"),
  Comment: mongoose.model("Comment", Comment, "Comment"),
  Post: mongoose.model("Post", Post, "Post")
};
