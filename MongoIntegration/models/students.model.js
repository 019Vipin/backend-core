/**
 * define the schema for the student
 */
const mongoose = require("mongoose");

const contactSchema=new mongoose.Schema({
    phone:{type:Number,match:/^[0-9]{10}$/}, //regular exp are meant for string datatype{match}
    guardian:{type:String,trim:true}
},{_id:false});


const studentSchema = new mongoose.Schema({
    name : {type:String,required:true,trim:true},
    age : {type:Number,required:true,trim:true}, //natively defined constrainst
    address:{type:mongoose.Schema.Types.ObjectId,ref:"Address"},
    contact:{type:contactSchema,default:{}},
    email:{type:String,required:true,unique:true,lowercase:true,trim:true},
    score:{type:[Number],validate:v=>Array.isArray(v)&& v.every(n=> n>=0 && n<=100)} // user defined constraint using validate
  },{timestamps:true});

studentSchema.index({email:1}); 

module.exports=mongoose.model("Student",studentSchema);
