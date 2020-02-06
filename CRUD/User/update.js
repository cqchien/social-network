require("../../model/connection");

const { User } = require("../../model/index");

const updateUser = async (data, userId) => {
  try {
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          email: data
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

data = "adsa@gmail.com"
updateUser(data, "5e3994a8b59a253240a472fa");
