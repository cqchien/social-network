require("../../model/connection");

const { User } = require("../../model/index");

const deleteUser = async (userId) => {
  try {
    await User.deleteOne({ _id: userId });
  } catch (error) {
    console.log(error);
  }
};

deleteUser("5e3994a8b59a253240a472fa");
