require("../../../model/connection");

const { User, Profile } = require("../../../model/index");

const createProfile = async (data, userId) => {
  try {
    let newProfile = await Profile.create(data);
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
  name: "cao quyet chien",
  dayOfBirth: "23/3/2000",
  job: "Student",
  address: "̃79 tan hoa 2, hiep phu, quan 9"
};
createProfile(data, "5e3a7fad3f449f1c6ccf4302");
