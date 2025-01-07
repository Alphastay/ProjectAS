const Hotel = require("../models/Hotels");


const uploadImages = async (req, res) => {
    const imageUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
  
    res.json({
      success: true,
      image_urls: imageUrls,
    });
  }
 


 const addHotel = async (req, res) => {
  console.warn(req.body);

 

  let hotel = new Hotel({
    name: req.body.name,
    locality: req.body.locality,
    description: req.body.description,
    contact: Number(req.body.contact),
    map: req.body.map,
    price: Number(req.body.price),
    address: req.body.address,
    amenities: {
      wifi: req.body.amenities?.wifi || false,
      tv: req.body.amenities?.tv || false,
      geyser: req.body.amenities?.geyser || false,
      powerBackup: req.body.amenities?.powerBackup || false,
    },
    bed: {
      single: req.body.bed?.single || false,
      kingsize: req.body.bed?.kingsize || false,
      queensize: req.body.bed?.queensize || false,
    },
   // mainImage: mainImageUrl,
   // additionalImages: additionalImageUrls,
    // rooms:req.body.rooms,
  });
  try{
  let result = await hotel.save();
  //  const imageUrls = image_filenames.map(filename => `http://localhost:4000/images/${filename}`);
  res.json({
    success: true,
    // image_urls: imageUrls,
    hotel: result
  });
  }catch(error){
    res.status(500).json({message:"error",error})
  }
}


const hotelList = async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      console.error("error fetching the product", error);
      res.status(500).json({ error: "Server error" });
    }
  }

  const searchHotel= async (req, res) => {
    let result = await Hotel.find({
      $or: [{ name: { $regex: req.params.key } }],
    });
    res.send(result);
  }

  


  module.exports= {hotelList,addHotel,uploadImages,searchHotel}
