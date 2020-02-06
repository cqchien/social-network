require("../../model/connection");

const { User, Post } = require("../../model/index");

const createPost = async (data, userId) => {
  try {
    let newPost = await Post.create(data);
    await User.updateOne(userId, {
      $push: {
        posts: newPost._id
      }
    });
  } catch (error) {
    console.log(error);
  }
};

data = {
  content: "hoom quadi choi",
  createdAt: new Date()
};
createPost(data, "5e3994a8b59a253240a472fa");
