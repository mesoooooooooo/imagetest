
import { Router } from "express";
//const {  createRoom, getAllRoom } = require("../controller/roomController");
import {  createUser,  getAllUser,  } from "../controller/userController.js";
  
//const upload  = require('../utils/multer');

const router =Router();


//register
router.route("/create").post(createUser);

//login
router.route("/getalluser").get(getAllUser);



export default router




