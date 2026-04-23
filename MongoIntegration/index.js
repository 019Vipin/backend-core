/**
 * Logic to connect with the mongodb
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Student= require("./models/students.model");

(async () => {
    try {
await mongoose.connect("mongodb://127.0.0.1:27017/learn_mongoose");
        console.log("MongoDB connection is successful !");
        //Delete all the documents in the given collection
        const delObj = await Student.deleteMany({});
        console.log(delObj);

    
        //Insert a single record in the mongodb
    const student=await Student.insertOne({name:"vipin",age:21});
    console.log(student);

    /**
     * Insert multiple records int he given collection
     */
    const students = await Student.insertMany([
        {name:"vipin",age:21},
        {name:"vip",age:20},
        {name:"vipi",age:19}
    ]);
    console.log('Inserted',students.map(d=>d.name));

    //Find the count of documents inside the 'students' colection
    const std_count=await Student.countDocuments();
    console.log(std_count);
    
    //Search a document based on the name
    const obj=await Student.findOne({name:"vipin"});
    console.log(obj); 


    } catch (err) {
        console.log("Mongo Error", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected");
    }
})();