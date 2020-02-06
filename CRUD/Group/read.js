require("../../model/connection");

const { Group } = require("../../model/index");

const joinGroup = async (groupId) => {
  try {
    await Group.findOne({ _id: groupId })
      .populate("admin", "username")
      .populate("members", "username")
      .then(console.log)
      .catch(console.log);
  } catch (error) {
    console.log(error);
  }
};

joinGroup("5e3ba933e7b952431818d96e");
