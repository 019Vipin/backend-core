const express=require('express');

//console.log(typeof express);

const app=express();
const PORT=5151;

/**
 * GET , POST , PUT , DELETE 
 */
app.get("/get",(req,res)=>{
    res.send("HEllo from the GET route");
})

app.post("/post",(req,res)=>{
    res.send("HEllo from the POST route");
})

app.put("/put",(req,res)=>{
    res.send("HEllo from the PUT route");
})

app.delete("/delete",(req,res)=>{
    res.send("HEllo from the DELETE route");
});



/**
 * Stitc the userRoutes here
 */
const userRoutes=require("./router/userRoutes");
app.use("/api/users",userRoutes);


/**
 * start the server
 */
app.listen(PORT,()=>{
    console.log(`server started on the port num :${PORT}`);
})
