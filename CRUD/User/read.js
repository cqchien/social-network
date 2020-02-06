require("../../model/connection");

const { User } = require("../../model/index");

const readUser = async (userId) => {
  try {
    await User.findOne({ _id: userId })
      .populate("posts", "-__v -likes")
      .then(console.log)
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};

readUser("5e3a7fad3f449f1c6ccf4302");
