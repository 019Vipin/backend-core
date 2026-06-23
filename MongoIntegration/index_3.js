/**
 * Logic to connect with the mongodb
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Student= require("./models/students.model");
const Address=require("./models/address.model");
const studentsModel = require("./models/students.model");

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/learn_mongoose");
        console.log("MongoDB connection is successful !");
        
        /**
         * Delete all the existing documents
         */
        await Promise.all([Address.deleteMany({}),studentsModel.deleteMany({})])

    /**
     * insert multiple records/documents in a collection
     */
    const studs=await studentsModel.insertMany([
        {name:"xyz",email:'abc@gmail.com',age:23},
        {name:"xz",email:'xyz@gmail.com',age:25},
    ])
   console.log(studs);

    /**
     * i want to find the count of documents inside a collection
     */
    const n=await Student.countDocuments({age:{$gte:24}});
    console.log(n);

    /**
     * i need to update an existing document
     */
    const res1=await Student.findOneAndUpdate(
    { email: "abc@gmail.com" },
    { $set: { age: 35 } },
    { new: true, includeResultMetadata: true }
);

console.log(res1);

const res2=await Student.findOneAndUpdate(
    { email: "xyz@gmail.com"},
    { $set: { age: 35 } },
    { new: true, includeResultMetadata: true }
);

console.log(res2);

/**
 * i want to delete a document:
 * 1,find,2.delete
 */
const delete_stud=await Student.findOneAndDelete({
    email:"abc@gmail.com",
})

console.log(delete_stud);
console.log(await Student.countDocuments({age:{$eq:24}}));

const s1=await Student.findOne({email:'abc@gmail.com'}).lean();
console.log(s1);

/**
 * Aggregation
 */
const agg_by_age=await Student.aggregate([
    {$group:{_id:'$age',count:{$sum:1}}}
]);
console.log(agg_by_age);

    } catch (err) {
        console.log("Mongo Error", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected");
    }
})();