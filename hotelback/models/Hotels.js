const mongoose = require("mongoose");

// const RoomSchema = new mongoose.Schema({
//     type: {
//       type: String,
//       required: true,
//       enum: ['acRoom', 'nonAcRoom', 'luxuryRoom'],
//     },
//     price: {
//       type: Number,
//       required: true,
//     }
//   });

const ReviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  rating: {
    type: String,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const HotelSchema = new mongoose.Schema({
  // email:{
  //   type:String,
  //   required:true,
  // },

  name: {
    type: String,
    required: true,
  },

  locality: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  

  // images: {
  //   type: [String],
  //   required: true,
  // },
  contact: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  amenities: {
    wifi: {
      type: Boolean,
      required: true,
      default: false,
    },
    ac: {
      type: Boolean,
      required: true,
      default: false,
    },
    geyser: {
      type: Boolean,
      required: true,
      default: false,
    },
    tv: {
      type: Boolean,
      required: true,
      default: false,
    },
    powerBackup: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  bed: {
    single: {
      type: Boolean,
      required: true,
      default: false,
    },
    kingsize: {
      type: Boolean,
      required: true,
      default: false,
    },
    queensize: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  map: {
    type: String,
  },

  reviews: [ReviewSchema],
  // rooms: [RoomSchema]
});

module.exports =
  mongoose.models.hotels || mongoose.model("hotels", HotelSchema);
