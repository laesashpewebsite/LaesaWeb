const mongoose = require("mongoose");
const ScholarshipSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Scholarships", ScholarshipSchema);
