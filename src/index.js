const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/user", require("./routes/user"));
app.use("/data", require("./routes/data"));

//Listener

app.listen(PORT, () => {
  console.log("SERVER IS RUNNING ON : " + PORT);
});
