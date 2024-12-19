const mongoose = require("mongoose");
require('dotenv').config();
const DB = process.env.MONGODB_URI;

  const connectDB = async () => {
  await mongoose
    .connect(DB ,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected to mongoDB");
    })
    .catch((error) => {
      console.log("error in connecting to mongoDB", error);
      process.exit(1);
    });
};

module.exports=connectDB;

//mongodb+srv://alphatechpune24:93SPrVp4tnzzwVNi@cluster0.71coi.mongodb.net/

//mongodb+srv://alphatechpune24:AlphaStay2024@cluster0.illtx.mongodb.net/AlphaStay?retryWrites=true&w=majority&appName=Cluster0";

//"mongodb+srv://ratipriya212003:AlphaStay212003@cluster0.65vhtjb.mongodb.net/AlphaStayPune?retryWrites=true&w=majority&appName=Cluster0"