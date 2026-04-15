/**
 * Server file - This is the startpoint of the app
 */

const express=require("express");
const app=express();

const PORT=7070;

app.use(express.json());

// Bring morgan into use 
//morgan = centralised login 
const morgan=require('morgan');
app.use(morgan('dev'));

const idea_route = require("./routers/ideas.routes");
// mount router
app.use("/ideas_app/v1", idea_route);



app.listen(PORT,()=>{
    console.log(`server started running on the port num:${PORT}`);
})