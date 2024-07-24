const mongoose = require("mongoose");

const TeamMemberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  position: String,
  bio: String,
  imageUrl: String,
});

module.exports = mongoose.model("TeamMember", TeamMemberSchema);
