require("../../model/connection");

const { Group } = require("../../model/index");

const createGroup = async (data, adminId) => {
  try {
    let newGroup = await Group.create(data);
    await Group.updateOne(
      { _id: newGroup._id },
      {
        $set: {
          admin: adminId
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

data = {
  name: "ABC",
  description: "an choi ngu nghi",
  createdAt: new Date()
};
createGroup(data, "5e3994a8b59a253240a472fa");
