require("../../../model/connection");

const { User, Profile } = require("../../../model/index");

const updateProfile = async (data, userId, profileId) => {
  try {
    await Profile.updateOne({ _id: profileId }, data);
    let newProfile = await Profile.findOne({ _id: profileId });
    await User.updateOne(
      { _id: userId },
      {
        $set: {
          profile: newProfile
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

data = {
  name: "nguyen van B",
  dayOfBirth: "23/3/2000",
  job: "Student",
  address: "̃79 tan hoa 2, hiep phu, quan 9"
};
updateProfile(data, "5e3994a8b59a253240a472fa", "5e3a871b5c56a0303086af7e");
