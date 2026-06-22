/**
 * define the schema for the student
 */
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    address:{type:mongoose.Schema.Types.ObjectId,ref:"Address"}
})

module.exports=mongoose.model("Student",studentSchema);
