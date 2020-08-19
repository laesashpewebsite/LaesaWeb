const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

/* Why is body parser not included?*/
// app.use(bodyParser.json() )

// Import Routes
const authRoute = require("./routes/auth");
const scholarshipsRoute = require("./routes/scholarships");
const eventsRoute=require("./routes/events");
const postRoute=require('./routes/post');
const bodyParser = require("body-parser");

app.use(express.json()); // allows you to send post requests
app.use(cors());

app.use("/api/member", authRoute);
app.use("/api/scholarships", scholarshipsRoute);
app.use("/api/events", eventsRoute);
app.use("/api/posts", postRoute)

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("Your error", error);
  });

app.listen(3000);
