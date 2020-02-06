require("../../../model/connection");
const { Post } = require("../../../model/index");

const createLike = async (postId, userId) => {
  try {
    await Post.updateOne(
      { _id: postId },
      {
        $push: {
          likes: userId
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

createLike("5e399dccea51411c401452fc", "5e3994a8b59a253240a472fa");
