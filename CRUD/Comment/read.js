require("../../model/connection");

const { Comment } = require("../../model/index");

const readComment = async (postId) => {
  try {
    await Comment.findOne({ post: postId })
      .populate("post", "-likes")
      .populate("author", "-posts -groups")
      .limit(2)
      .then(console.log)
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};

readComment("5e399dccea51411c401452fc");
