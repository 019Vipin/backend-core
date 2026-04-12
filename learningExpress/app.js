/**
 * MW
 * typs of MW
 * 1. Application level MW
 * 2.Route level MW
 * 3. Custom MW - can be chained between route and logic
 * 4. Inbuilt express MW
 * 5. External MW
 * 6. Error handling MW
 */


const express=require('express');
const app=express();
const PORT=5151;


/**
 * 
 * Inbuilt MW of express
 */
app.use(express.json());


/**
 * using external MW morgan
 */
const morgan=require("morgan");
app.use(morgan('dev'));

function logRequestMW(req,res,next){
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}
app.use(logRequestMW);

app.get("/",(req,res)=>{
    res.send('Home Route !');
})


app.post("/hello",(req,res)=>{
    res.send('Hello !');
})

/** Stich the router file to the app.js */
const userRoute=require("./router/userRoutes");
app.use("/api/users",userRoute);


/**
 * Erroe Handling MW - Special MW : err,req,res,next
 */

app.get("/divide",(req,res,next)=>{
    try{
        const result=10/0;
        if(!isFinite(result)){
            throw new Error('Divide by 0');
        }
        res.send(`Result=${result}`);
    } catch(err){
        next(err);
    }
})

app.use((err,req,res,next)=>{
    console.log(`Error MW caught : ${err.message}`);
    res.status(500).json({
        status : "fail",
        message : err.message || 'Unexpected failure'
    });
});

/**
 * server got started
 */
app.listen(PORT,()=>{
    console.log(`Server got started on the port ${PORT}`)
});