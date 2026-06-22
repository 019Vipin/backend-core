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

    const add= await Address.create({line1:"bellandur",city:"bangalore",country:"india"});
        const stud=await Student.create({
            name:"vipin",
            age:22,
            address:add._id
        })
        console.log(add);
        console.log(stud);
        
        //Now I should get the address of the above students
        const a1=await Address.findOne({_id:stud.address});
        console.log(a1);

        //i need to generate the populated data
        const populated_stud = await Student
    .findOne({_id: stud._id})
    .populate("address");

console.log(populated_stud);
    console.log(populated_stud);

    } catch (err) {
        console.log("Mongo Error", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected");
    }
})();