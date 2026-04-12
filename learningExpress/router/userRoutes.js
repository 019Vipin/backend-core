const express=require("express");
const router=express.Router();

// function routeLevelMW(req,res,next){
//     console.log("User Route Level MW");
//     next();
// }

// router.use(routeLevelMW);


router.use((req,res,next)=>{
    console.log("User Route Level MW");
    next();
});

function authMW(req,res,next){
    console.log("Req is authenticated");
    next();
}




/**
 *  I can go and define routes using router
 */
router.get("/",authMW,(req,res)=>{
    res.send("All users");
});


router.post("/",(req,res)=>{
    const body = req.body;
    console.log(JSON.stringify(body));
    res.send(JSON.stringify(body));
});

module.exports=router;