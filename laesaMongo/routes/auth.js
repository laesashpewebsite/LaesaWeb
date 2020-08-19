const router = require("express").Router();
const Member = require("../models/Member");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  // validating the data from the user with the requirements specifed  
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await Member.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists :(");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const member = new Member({
    name: req.body.name,              
    email: req.body.email,
    major: req.body.major,
    password: hashPassword,
  });
  try {
    const savedMember = await member.save();
    res.send({ member: member._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const member = await Member.findOne({ email: req.body.email });
  if (!member)
    return res
      .status(400)
      .send("Something is wrong when logging in. Check credentials again :(");

  const validPassword = await bcrypt.compare(
    req.body.password,
    member.password
  );
  if (!validPassword)
    return res
      .status(400)
      .send("Something is wrong when logging in. Check credentials again :(");

  const token = jwt.sign({ _id: member._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  res.send("Success");
});

router.post("/", (req, res) => {
  res.send({ hey: "Hello" });
});

module.exports = router;
