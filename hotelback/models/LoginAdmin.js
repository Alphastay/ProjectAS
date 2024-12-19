const mongoose=require("mongoose")

const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.models.loginadmins || mongoose.model("loginadmins",LoginSchema);