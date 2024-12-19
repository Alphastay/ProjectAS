const express = require("express");
const path = require("path");

const {verify} = require("../controllers/verifyaddhotelController");

const verifyaddhotelRouter =express.Router();

verifyaddhotelRouter.post("/verifyaddhotel",verify);

module.exports= verifyaddhotelRouter;