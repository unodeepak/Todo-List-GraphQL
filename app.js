require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017", {});
  app.listen(port, () => {
    console.log(`Server is running at port at port : ${port}`);
  });
};

connectDB();