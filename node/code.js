const fs=require('fs');
console.log('1:start');

//async operation (uses libuv thread pool)
fs.readFile('file.txt','utf-8',(err,data) =>{
    console.log('3:File read complete');
});

setTimeout(()=>{
    console.log('4:setTimeout executed');
},3);
console.log('2:End');