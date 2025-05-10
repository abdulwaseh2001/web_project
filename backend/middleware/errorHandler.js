module.exports =(err,req,res,next)=>
{
    console.error("error",err.stack)
    res.status(500).json({msg : "internal server error"});


};