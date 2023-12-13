import express, { json } from "express";
const app = express();
import cookieParser from "cookie-parser";
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
//


// Use Helmet middleware
app.use(helmet());
//const dotenv=require("dotenv");

import errorMiddleware from "./middleware/error.js";
//import { urlencoded } from 'body-parser'
const { urlencoded } = bodyParser;
//require('dotenv').config();
dotenv.config();



app.use(json());
app.use(cookieParser());
//app.use(cookieParser());
app.use(urlencoded({ extended: true }));
//app.use(fileUpload());
app.use(json());

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/login',(req,res)=>{
    res.send('<h1> working fine </h1>')
})
//route imports 
//const commercial =require("./router/commercialrouter");
//const library =require("./router/libraryrouter");
//const pg =require("./router/pgrouter");
//import room from "./router/roomrouter";
import auth from "./router/userrouter.js";

//import multiple from "./router/multiplerouter";
//const SearchMultipleproduct =require("./routes/searchmultipleRoutes");
//const User =require("./routes/userRoute");
//app.use("/api/v1",commercial);
//app.use("/api/v1",library);
//app.use("/api/v1",pg );

//app.use("/api/v1",room);
app.use("/api/v1",auth);
//app.use("/api/v1",multiple);

//app.use("/api/v1",multipleproduct);
//app.use("/api/v1",imageproduct);



app.use(errorMiddleware);

export default app;