const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// Import Routes
const authRoute = require("./routes/auth");
const scholarshipsRoute = require("./routes/scholarships");

app.use(express.json());
app.use(cors());

app.use("/api/member", authRoute);
app.use("/api/scholarships", scholarshipsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(
  process.env.DB_CONNECT,

  { useNewUrlParser: true }
);

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("Your error", error);
  });

app.listen(3000);
