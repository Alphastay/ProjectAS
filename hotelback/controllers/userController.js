const jwt = require("jsonwebtoken");

const UserLogin = require("../models/LoginUser");

const Signup = async(req,res)=>{
  try{
let user = new UserLogin({
  name: req.body.name,
  email: req.body.email,
  password: req.body.password,
});
console.log(user);
let result = await user.save();
result = result.toObject();
delete result.password;

res.json({
  success:true,
  message: "User registered successfully",
  user:result,
});
}
  catch(error){
    console.error("Error during signup", error);
    res.status(500).json({
      success:false,
      message: "Signup Failed. Please try again"
    })
  }

}

const Login = async(req,res)=>{
  console.log(req.body);
  if(req.body.email && req.body.password){
    let user = await UserLogin.findOne(req.body).select("-password");
    if(user){
      res.send(user)
    }
    else{
      res.send("no user found");
    }
  }
  else{
    res.send("email and password needed");
  }
}


  module.exports={Signup,Login}
  