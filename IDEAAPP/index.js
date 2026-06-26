/**
 * Server file - This is the startpoint of the app
 */

const express=require("express");
const app=express();
const mongoose =require("mongoose");
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });

console.log(process.env.MONGODB_URI);


/**
 * Connect MongoDB and Start Server
 */
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection successful!");

    } catch (err) {
        console.log('MongoDB Error:', err);
    }
})();

    const PORT = 7070;

    app.use(express.json());

    const idea_route = require("./routers/ideas.routes");
    app.use("/ideas_app/v1", idea_route);

    const auth_route = require("./routers/auth.routes");
    app.use("/ideas_app/v1", auth_route);



        app.listen(PORT, () => {
            console.log(`Server started running on port ${PORT}`);
        });






// const PORT=7070;

// app.use(express.json());

// // Bring morgan into use 
// //morgan = centralised login 
// const morgan=require('morgan');
// app.use(morgan('dev'));

// const idea_route = require("./routers/ideas.routes");
// // mount router
// app.use("/ideas_app/v1", idea_route);



// app.listen(PORT,()=>{
//     console.log(`server started running on the port num:${PORT}`);
// })