const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  { 
    smart_id: {
        type: String,
        min: 10,
        max: 10,
        unique: true,
        required: true,
    },
    username: {
      type: String,
      required: true,
      min: 5,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    contact: {
      type:String,
      min: 10,
      max: 10,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 15,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },                     
    bio: {
      type: String,
      max: 100,
    },
    // designation: {
    //   type: String,
    //   required: true,
    //   enum: ['Student' , 'Alumini' , 'Faculty'],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);