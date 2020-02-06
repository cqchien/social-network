require("../../model/connection");

const { User } = require("../../model/index");

const createUser = async (data) => {
  try {
    await User.create(data);
  } catch (error) {
    console.log(error);
  }
};

data = {
  username: "Cao Quyet",
  password: 1234,
  email: "caochientp1@gmail.com"
};
createUser(data);
