require("../../model/connection");

const { Group } = require("../../model/index");

const deleteGroup = async (groupId) => {
  try {
    await Group.deleteOne({_id: groupId});
  } catch (error) {
    console.log(error);
  }
};

deleteGroup("");
