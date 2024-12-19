const Hotel = require("../models/Hotels");
const User= require("../models/LoginAdmin");

const verify = async(req,res)=>{

    const {email} = req.body;
    try{

        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({ message: 'User not found' });

        }
         const hotelExists = await Hotel.findOne({ownerEmail:email});
         console.log('User:', user); // Log the user
         console.log('Hotel Exists:', hotelExists);
         
       

        res.json({ hotelExists: !!hotelExists });

    }
    catch(error){
        res.status(500).json({message:"error in verifying user"});
    }
}

module.exports= {verify}