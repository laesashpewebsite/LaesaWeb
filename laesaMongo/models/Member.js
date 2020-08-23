// Member.js and auth.js go together

const mongoose = require("mongoose");
const memberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  major: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },

  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Member", memberSchema);
