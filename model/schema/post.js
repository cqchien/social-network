const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  content: {
    type: String,
    require: true
  },
  createdAt: String,
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = PostSchema;
