require("../../model/connection");

const { User, Post } = require("../../model/index");

const deletePost = async (postId, userId) => {
  try {
    await Post.deleteOne({_id: postId});
    await User.updateOne(
      { _id: userId },
      {
        $pull: {
          posts: postId
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

deletePost("5e3a608692c8354228da1541", "5e3994a8b59a253240a472fa");
