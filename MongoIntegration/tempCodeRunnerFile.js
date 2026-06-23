    /**
//      * i want to find the count of documents inside a collection
//      */
//     const n=await Student.countDocuments({age:{$gte:24}});
//     console.log(n);

//     /**
//      * i need to update an existing document
//      */
//     const res1=await Student.findOneAndUpdate(
//     { email: "abc@gmail.com" },
//     { $set: { age: 35 } },
//     { new: true, includeResultMetadata: true }
// );

// console.log(res1);

// const res2=await Student.findOneAndUpdate(
//     { email: "xyz@gmail.com"},
//     { $set: { age: 35 } },
//     { new: true, includeResultMetadata: true }
// );

// console.log(res2);