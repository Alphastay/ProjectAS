const express = require("express");
const multer = require("multer");
const path = require("path");
const {hotelList,addHotel,searchHotel} = require("../controllers/hotelController");

const hotelRouter =express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/images");
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  });

  const upload = multer({ storage: storage });

  hotelRouter.get("/AlphaStay/hotels",hotelList);
hotelRouter.post("/addhotel",upload.array("images", 10),addHotel);
   //hotelRouter.post("/upload", upload.array("images", 8),uploadImages)
  hotelRouter.get("/search/:key",searchHotel)


  module.exports = hotelRouter;
