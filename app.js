const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const { MONGODBURL } = require("./config.js/keys");

require("./user");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(require("./router"));
mongoose.connect(MONGODBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("MONGODB CONNECTED");
});
mongoose.connection.on("error", (err) => {
  console.log("MONGODB error : " + err);
});

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON : " + PORT);
});
