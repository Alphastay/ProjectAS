// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const {selectHotel, updateHotel} = require("../controllers/updateController");
// const updateRouter = express.Router();


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "upload/images");
//     },
//     filename: function (req, file, cb) {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     },
//   });

//    const upload = multer({ storage: storage });

// updateRouter.get("/hotels/admin",selectHotel);
// updateRouter.put("/hotels/update",upload.array('images',8),updateHotel);

// module.exports= updateRouter;