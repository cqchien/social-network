const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  dayOfBirth: {
    type: String,
    require: true,
  },
  job: {
    type: String,
  },
  address: {
    type: String
  }
});

module.exports = ProfileSchema
