require("../../../model/connection");

const { User, Profile } = require("../../../model/index");

const updateProfile = async (userId, profileId) => {
  try {
    await Profile.deleteOne({ _id: profileId });
    await User.updateOne(
      { _id: userId },
      {
        $unset: {
          profile: ""
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

updateProfile("5e3994a8b59a253240a472fa", "5e3a871b5c56a0303086af7e");
