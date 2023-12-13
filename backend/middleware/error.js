import ErrorHandler from "../utils/ErrorHandler.js";


export default(err,req,res,next,) =>{
    err.statuscode=err.statuscode || 500;
err.message=err.message || 500;

// wrong mongodb error

if(err.name === 'CastError'){

    const message ='Resources are not found.Invalid :${err.path}';

    err =new ErrorHandler(message,400);
}


res.status(err.statuscode).json({
    success:false,
    message:err.message,
});

}; 