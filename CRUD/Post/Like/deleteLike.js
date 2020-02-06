require("../../../model/connection");
const { Post } = require("../../../model/index");

const deleteLike = async (postId, userId) => {
  try {
    await Post.updateOne(
      { _id: postId },
      {
        $pull: {
          likes: userId
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

deleteLike("5e399dccea51411c401452fc", "5e3994a8b59a253240a472fa");
