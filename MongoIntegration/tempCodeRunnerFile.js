/**
 * Logic to connect with the mongodb
 */
require("dotenv").config();
const mongoose = require("mongoose");

console.log("ENV VALUE:", process.env.MONGODB_URI);

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/learn_mongoose");
        console.log('MongoDB connection is successful !')
    } catch (err) {
        console.log("Mongo Error", err)
    }
})();