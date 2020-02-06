require("../../model/connection");

const { Comment } = require("../../model/index");

const deleteComment = async (commentId) => {
  try {
    await Comment.deleteOne({ _id: commentId });
  } catch (error) {
    console.log(error);
  }
};

deleteComment("");
