// const Hotel = require("../models/Hotels");

// const selectHotel = async (req, res) => {
//     try {
//       const email=req.query.email;
//       const result = await Hotel.findOne({ownerEmail:email});
//       if (result) {
//         res.status(200).json(result);
//       } else {
//         res.status(404).send({ result: "no record found" }); // Better status code
//       }
//     } catch (error) {
//       console.log("error in fetching data", error);
//       res.status(500).send({ error: "Server Error" }); // Return error response
//     }
//   }

//   const updateHotel = async(req,res)=>{
//     const email=req.query.email;
//     const amenities = req.body.amenities ? JSON.parse(req.body.amenities) : {};
//     const bed = req.body.bed ? JSON.parse(req.body.bed) : {};
//     let updateData = {
//       name: req.body.name,
//       description: req.body.description,
//       address: req.body.address,
//       locality: req.body.locality,
//       price: req.body.price,
//       contact: req.body.contact,
//       map: req.body.map,
//       amenities,
//       bed,
//     };

//     if (req.files && req.files.length > 0) {
//       updateData.image = req.files.map((file) => file.filename); // Save filenames in database
//     }

//     let result = await Hotel.updateOne(
//       {ownerEmail:email},
//       {
//         $set:updateData,
//       }
//     )
//     res.status(200).json(result);
//   }
  
//   module.exports = {selectHotel, updateHotel}