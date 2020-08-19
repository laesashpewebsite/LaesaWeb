const express = require("express");
const router = express.Router();
const verify = require("./verifyToken");
const Scholarship = require("../models/Scholarship"); // importing mongoose model/Schema

router.get("/", async (req, res) => {
  try {
    const scholarships = await Scholarship.find(); // mongoose method
    res.json(scholarships);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:scholarshipId", async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.scholarshipId);
    res.json(scholarship);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const scholarship = new Scholarship({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedScholarship = await scholarship.save();
    res.json(savedScholarship);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:scholarshipId", verify, async (req, res) => {
  try {
    const removedScholarship = Scholarship.remove({ _id: req.params.postId });

    res.json(removedScholarship);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:scholarshipId", verify, async (req, res) => {
  try {
    const updatedScholarship = Scholarship.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );

    res.json(removedScholarship);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
