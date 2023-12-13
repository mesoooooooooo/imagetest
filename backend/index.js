
import app from "./app.js"
//const app= require("./app");

//import { config } from "dotenv";
import { connectDB } from './config/database.js';


//import app from "./app.js";

import { config } from "dotenv";
//import connectDatabase from "./config/database";

//config

//config
config({path:"backend/config/config.env"
});


connectDB();
///const port = 4000

app.listen(process.env.PORT,()=>{
    console.log('Server listening on port${PORT}')
})


