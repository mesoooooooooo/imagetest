import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";

import { findOne } from '../models/usermodel.js';


import { findOne as _findOne } from '../models/roommodel.js';

export const checkRoomListingMiddleware =  catchAsyncErrors(async (req, res, next) => {

  const userId = req.user._id; // Assuming you have implemented user authentication
  const existingRoom = await _findOne({ owner: userId });

  if (existingRoom) {
    return res.status(400).json({ message: 'You already have a listing room' });
  }


    //const phonenumber = req.body.phonenumber;
    const user = await findOne({_id:req.body._id});
    //  await Room.findById(room.phonenumber);
    //const existingRoom = await Room.findOne({ phonenumber });

    if (user) {
         await _findOne({phonenumber:req.body.phonenumber});
      return next(new ErrorHandler('Room owner can list only one room.', 401));
    }


    if (!room) {
      return next(new ErrorHandler('Room owner can list only one room.', 401));
    }
    next();
  
  
  });
  







