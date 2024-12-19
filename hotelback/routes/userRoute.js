const express = require("express");
const {userGoogleLogin,Signup,Login} = require("../controllers/userController");
const userRouter = express.Router();

//userRouter.post("/auth/google",userGoogleLogin);
userRouter.post("/signup",Signup)
userRouter.post("/login",Login)

module.exports = userRouter;