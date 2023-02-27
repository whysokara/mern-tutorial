const express = require("express");
const dotenv = require("dotenv").config();
const port = 8000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`Welcome to port ${port}`);
});
