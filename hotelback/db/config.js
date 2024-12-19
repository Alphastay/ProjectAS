const mongoose = require("mongoose");
const DB =
"mongodb+srv://alphatechpune24:AlphaStay2024@cluster0.illtx.mongodb.net/AlphaStay?retryWrites=true&w=majority";

  const connectDB = async () => {
  await mongoose
    .connect(DB)
    .then(() => {
      console.log("connected to mongoDB");
    })
    .catch((error) => {
      console.log("error in connecting to mongoDB", error);
    });
};

module.exports=connectDB;

//mongodb+srv://alphatechpune24:93SPrVp4tnzzwVNi@cluster0.71coi.mongodb.net/

//mongodb+srv://alphatechpune24:AlphaStay2024@cluster0.illtx.mongodb.net/AlphaStay?retryWrites=true&w=majority&appName=Cluster0";

//"mongodb+srv://ratipriya212003:AlphaStay212003@cluster0.65vhtjb.mongodb.net/AlphaStayPune?retryWrites=true&w=majority&appName=Cluster0"