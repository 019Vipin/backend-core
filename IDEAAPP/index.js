/**
 * Server file - This is the startpoint of the app
 */

const express=require("express");
const app=express();

const PORT=7070;

app.use(express.json());

const idea_route = require("./routers/ideas.routes");
// mount router
app.use("/ideas_app/v1", idea_route);



app.listen(PORT,()=>{
    console.log(`server started running on the port num:${PORT}`);
})