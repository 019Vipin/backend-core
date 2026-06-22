const mongoose=require("mongoose");

const addressSchema = new mongoose.Schema({
    line1 : String,
    line2 : String,
    country:String
});

module.exports=mongoose.model("Address", addressSchema);