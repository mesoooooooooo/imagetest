
//import { Schema, model } from "mongoose";
//import { isEmail } from "validator";
//import { hash, compare } from "bcryptjs";
//import { sign } from "jsonwebtoken";
//import crypto from "crypto";

/*
const userSchema = new Schema({

name:{
    type:String,
    required:[true,"please enter your name"]
},


phonenumber:{
    type:Number,
   required:[true,"please enter your phonenumber"],
   unique:true,
},

createdAt:{
    type:Date,
    default: Date.now,
   
},

});

*/
import mongoose from 'mongoose';
import {  model } from "mongoose";

const schema= new mongoose.Schema({


  name:{
    type:String,
    required:[true,"please enter your name"]
},


phonenumber:{
    type:Number,
   required:[true,"please enter your phonenumber"],
},

createdAt:{
    type:Date,
    default: Date.now,
   
},

});


export const User  = mongoose.model("User",schema);


  

  
//userSchema.pre("save", async function (next) {
//  if (!this.isModified("password")) {
 //   next();
//  }

//  this.password = await bcrypt.hash(this.password, 10);
//});

// JWT TOKEN
//userSchema.methods.getJWTToken = function () {
//  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//    expiresIn: process.env.JWT_EXPIRE,
//  });
//};


//userSchema.methods.comparePassword = async function (password) {
 // return await bcrypt.compare(password, this.password);
//};

  
/*
  // Generating Password Reset Token
  userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    // Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };
*/

//export default model('User', userSchema);

//export const User =mongoose.model("User",schema);
