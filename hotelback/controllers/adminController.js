const jwt = require("jsonwebtoken");
const secretKey = "secretKey";
const LoginAdmin = require("../models/LoginAdmin");

const loginAdmin = async (req, res) => {
    try {
      if (req.body.password && req.body.email) {
        const admin = await LoginAdmin.findOne(req.body).select("-password");
        console.log(admin);
        if (!admin) {
          return res.status(400).json({ message: "Invalid email or password" });
        } else {
          const token = jwt.sign({ adminId: admin._id }, secretKey, {
            expiresIn: "1h",
          });
          return res.json({
            token,email:admin,message: "Login successful"
          });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }

  module.exports = {loginAdmin}