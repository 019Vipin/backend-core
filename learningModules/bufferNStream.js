/**const buffer=Buffer.from('Hello');
console.log(buffer);
console.log(buffer.toString());
**/

const fs=require('fs');
const readStream=fs.createReadStream('C:/Backend-core/learningModules/bigfile.txt');

readStream.on('data',chunk =>{
    console.log("Received chunk:",chunk)
});

readStream.on('end',() =>{
    console.log("No more data to read!")
})
