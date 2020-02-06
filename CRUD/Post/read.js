require("../../model/connection");

const { Post } = require("../../model/index");

const readPost = async (postId) => {
  try {
    await Post.findOne({ _id: postId })
      .populate("likes", "-__v -password")
      .then(console.log)
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};

readPost("5e399dccea51411c401452fc");
