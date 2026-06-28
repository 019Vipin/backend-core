const config=require("../configs/auth.config");
const jwt=require("jsonwebtoken");

const verifyToken=(req,res,next)=>{
    //verification

    //fetch the access token from the header
    const token=req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message : "No token Provided"
        });
    }

    // check if the token is still valid
    Jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                message:'UnAuthorized!'
            });
        }
        next();
    });
}

module.exports={
    verifyToken:verifyToken
}