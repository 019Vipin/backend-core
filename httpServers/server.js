const http = require('http'); 

const PORT=3456;

const server=http.createServer((req,res)=>{
    //i need to write the log to accept request and then respond back
    if(req.url==="/" && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcome to the home page !");
    } else if(req.url==="/about" && req.method==="GET"){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Welcome to the About us page !");
    } else if(req.url==="/api/data" && req.method==="POST"){
        // now read the req body data-manually write the code for understanding data
        let body="";
        req.on('data',(chunk)=>{
            body += chunk.toString();
        });
        req.on('end',()=>{
            const parsedData=JSON.parse(body);
            console.log(`Received data : ${parsedData}`);
            res.writeHead(201,{'Content-Type':'application/json'});
            res.end(JSON.stringify({message:'Data Received',data:parsedData}));
        })
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("404-Not Found");
    }
});

server.listen(PORT,()=>{
    console.log(`server started running on the port no ${PORT}`);
})  