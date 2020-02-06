require("../../model/connection");

const { Comment } = require("../../model/index");

const updateComment = async (commentId) => {
  try {
    await Comment.updateOne(
      { _id: commentId },
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

data = "oc cho qua";
updateComment("5e3b9f3e04475937080b986f");
