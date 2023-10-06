const { Db } = require("mongodb");
const mongoose = require("mongoose");

module.exports = () => {
  try {
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri,{});
    console.log("MONGODB Connected");
  } catch (error) {
    console.log(error);
    console.log("MONGODB Connection Failed");
  }
};