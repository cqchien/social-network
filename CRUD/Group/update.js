require("../../model/connection");

const { Group } = require("../../model/index");

const createGroup = async (data, groupId) => {
  try {
    await Group.updateOne({ _id: groupId }, data);
  } catch (error) {
    console.log(error);
  }
};

data = {
  name: "ABCXYZss",
  description: "an choi ngu nghi"
};
createGroup(data, "5e3ba933e7b952431818d96e");
