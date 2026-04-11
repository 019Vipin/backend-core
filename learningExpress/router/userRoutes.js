const express=require("express");
const router=express.Router();


/**
 *  I can go and define routes using router
 */
router.get("/",(req,res)=>{
    res.send("All users");
});

module.exports=router;