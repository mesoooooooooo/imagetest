
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js"; 
//import {  User } from "../models/usermodel.js";
import { User } from "../models/usermodel.js";
//import sendToken from ".
export const createUser = catchAsyncErrors(async (req, res, next) => {

//const { name, phonenumber} = req.body;

  //let user = await User.findOne({email,phonenumber})

 // Attempt to find a user with the same email or phone number
 //let user = await findOne({ $or: [{ email }, { phonenumber }] });

 const data = {
  name: req.body.name,phonenumber: req.body.phonenumber };

const user = await User.create(data);
//create(data);
  res.status(201).json({
    success: true,
    user
   //newRoom
  });
// }//catch (error) {
 // console.error(error);
  //next(new ErrorHandler("Error crea'''''''''''''''''''''''''
  
 
});





export const getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await  User.find();
  

  res.status(200).json({
    success: true,
    users,
  });
});


