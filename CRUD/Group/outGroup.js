require("../../model/connection");

const { User, Group } = require("../../model/index");

const joinGroup = async (memberId, groupId) => {
  try {
    await Group.updateOne(
      { _id: groupId },
      {
        $pull: {
          members: memberId
        }
      }
    );
    await User.updateOne(
      { _id: memberId },
      {
        $pull: {
          groups: groupId
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

joinGroup("5e3a7fad3f449f1c6ccf4302", "5e3ba933e7b952431818d96e");
