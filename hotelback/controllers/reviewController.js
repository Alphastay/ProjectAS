const Hotel = require("../models/Hotels");

const reviews = async(req,res)=>{
    const {hotelId}=req.params;
    const { title, rating, comment ,userName} = req.body;
  
    try {
     
      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
          return res.status(404).json({ message: 'Hotel not found' });
      }
  
      const newReview = {
          title,
          comment,
          rating,
          userName,
      };
  
      hotel.reviews.push(newReview);
      await hotel.save();
  
      res.status(201).json({ message: 'Review added successfully', review: newReview });



  } catch (error) {
      res.status(500).json({ message: 'Error adding review', error });
  }
  }


  const getHotelDetails=async(req,res)=>{
    try{
        const hotelId=req.params.hotelId;

        const hotel=await Hotel.findById(hotelId);

        if(!hotel){
            return res.status(404).json({message:"hotel not found"});

        }

        res.json({
            success:true,
            message:"Hotel found",
            hotel:hotel,
        });
    }
    catch(error){
        console.error("Error fetching hotel details:", error);
    res.status(500).json({ message: "Internal Server Error" });
    }
  }
  
  module.exports= {reviews,getHotelDetails}