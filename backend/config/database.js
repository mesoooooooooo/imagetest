import mongoose from 'mongoose';

//const { connect, connection } = mongoose;
/*
const connectDatabase =()=> {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     //useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
    
    
DB_URI ='mongodb://127.0.0.1:27017/bdatabase'
};

*/

//const connectDatabase = async () => {
//  await connect(process.env.DB_URI, {
   // useCreateIndex: true,
//  });
 // console.log(`Mongodb connected with server: ${connection.host}`);
//};


 //export default connectDatabase;

 export const connectDB = async () => {
  //await connect(process.env.DB_URI, {
   // useCreateIndex: true,
  const {connection}=await mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
      useUnifiedTopology: true
  });
  
 
  console.log(`Mongodb connected with server: ${connection.host}`);
};


 //export default connectDatabase;











//update room for  owner 
//for room owner -id,---

//get all user -admin  ---
//delete user by admin
//delete room listing by admin

//get all active subs user -admin

//show plan -owner
// show owner - buy plan -owner
//room book not book to owner api - owner


//register---
//logout// ----

//.................

//delete owner room --
//update room for owner---
//for room owner, ---
//get all user   --

//get all active subs user
//show plan 
// show owner - buy plan

//room book not book to owner api ==














