/** 
const os=require('os');
console.log(typeof os)

console.log("Platform:", os.platform());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Free/Total Ratio:", os.freemem() / os.totalmem());
*/



const fs = require('fs');
/** 
// Write in the sync manner
console.log("before the sync write");
fs.writeFileSync('data.txt', 'Hello World !');
console.log("After the sync write");

console.log("before the sync read");
const content = fs.readFileSync('data.txt', 'utf8');
console.log(content);
console.log("After the sync read");
*/

//write in the Async manner
console.log("Before async write and read");
fs.writeFile('note.txt', "Hello my dear students!", (err) => {
    if (err) throw err;
    console.log("Done writing async way");
    console.log("Start reading the async way");
    fs.readFile('note.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    console.log("After reading data");
});
console.log("After async write and read");


