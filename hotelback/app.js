const port = process.env.PORT || 4000;
const express = require("express");
const app = express();
const path=require("path");
const cors = require("cors");
// const secretKey = "secretKey";

const adminRouter = require("./routes/adminRoute")
const userRouter = require("./routes/userRoute")
const hotelRouter = require("./routes/hotelRoute")
const reviewRouter = require("./routes/reviewRoute");
//const updateRouter = require("./routes/updateRoute");
const verifyaddhotelRouter=require("./routes/verifyaddhotelRoute");

const connectDB = require("./db/config");

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: [""],
    methods:["POST","GET"],
    credentials:true
  })
);



app.use("/images", express.static(path.join(__dirname, "upload/images")));


app.use("/api/loginadmins",adminRouter)
app.use("/api/users",userRouter)
app.use('/images', express.static('upload/images'))
app.use('/api',hotelRouter)
app.use("/api",reviewRouter)
// app.use("/api",updateRouter)
app.use("/api",verifyaddhotelRouter)

app.get("/", (req, res) => {
  res.send("Express app is running");
});



                                           
app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port" + port);
  } else {
    console.log("error" + error);
  }
});
