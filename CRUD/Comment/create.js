require("../../model/connection");

const { Comment } = require("../../model/index");

const createComment = async (data, postId, userId) => {
  try {
    let newComment = await Comment.create(data);
    await Comment.updateOne(
      { _id: newComment._id },
      {
        $set: {
          post: postId,
          author: userId
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

data = {
  content: "ngu vcl",
  createdAt: new Date()
};
createComment(data, "5e399dccea51411c401452fc", "5e3994a8b59a253240a472fa");
