const express = require("express");
const {reviews,getHotelDetails} = require("../controllers/reviewController");
const reviewRouter = express.Router();

reviewRouter.post("/hotel_details/:hotelId/review",reviews);
reviewRouter.get("/hotel_details/:hotelId",getHotelDetails);

module.exports = reviewRouter;