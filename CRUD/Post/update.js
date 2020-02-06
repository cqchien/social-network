require("../../model/connection");

const { Post } = require("../../model/index");

const updatePost = async (data, postId) => {
  try {
    await Post.updateOne(
      { _id: postId },
      {
        $set: {
          content: data
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

data = "eddd"
updatePost(data, "5e399dccea51411c401452fc");
